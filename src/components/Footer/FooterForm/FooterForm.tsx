"use client";

import {ReactElement, useState} from 'react';
import Link from 'next/link';

import { IFooterFormDOM } from '@/types/language';
import { IFooterFormState } from '@/types/footerForm';
import MessageModal from '@/components/modals/MessageModal/MessageModal';
import { checkEmail, sanitizeText } from '@/libs/checkers';

import styles from "./footerForm.module.css";
import Loader from '@/components/modals/Loader/Loader';


const FooterForm = ({
    footerForm
}: {
    footerForm: IFooterFormDOM
}): ReactElement => {

    const [nameInput, setNameInput] = useState<string>("");
    const [emailInput, setEmailInput] = useState<string>("");
    const [textInput, setTextInput] = useState<string>("");
    const [policyInput, setPolicyInput] = useState<boolean>(false);
    const [sendState, setSendState] = useState<IFooterFormState>(null);
    const [loadState, setLoadState] = useState<boolean>(false);


    const sendMessasge = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimName = nameInput.trim();
        setNameInput(trimName);
        if (!nameInput.trim().length || nameInput.trim().length < 2) {
            setSendState("name");
            return;
        }
        const nameToSend = sanitizeText(nameInput.trim());

        const checkedEmail = checkEmail(emailInput);
        if (!checkedEmail) {
            setSendState("email");
            return;
        }

        const trimText = textInput.trim();
        setTextInput(trimText);
        if (!trimText.length || trimText.length < 2) {
            setSendState("textArea");
            return;
        }
        const textToSend = sanitizeText(textInput.trim());

        if (!policyInput) {
            setSendState("policy");
            return;
        }

        const objectToSend = {
            name: nameToSend,
            email: emailInput,
            message: textToSend
        }

        setLoadState(true);

        try {
            const response = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(objectToSend)
            });

            const result = await response.json();
            console.log(result.status);
            if (result.message == "Sending successful") {
                setSendState("success");
                setNameInput("");
                setEmailInput("");
                setTextInput("");
                setPolicyInput(false);
            } else {
                setSendState("unknown");
            }
        } catch {
            setSendState("unknown");
        } finally {
            setLoadState(false);
        }
    }   


    return (
        <form id="my-letter" className={styles.form} onSubmit={(e) => sendMessasge(e)} >
            <div className={styles.input_wrap}>
                <div className={styles.input}>
                    <label htmlFor="name">{footerForm.nameLabel}</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={nameInput} 
                        onChange={(e) => setNameInput(e.target.value)}  
                    />
                    {sendState && sendState === "name" && 
                        <MessageModal 
                            text={footerForm.sendNameError} 
                            setter={setSendState} 
                        />
                    }
                </div>
                <div className={styles.input}>
                    <label htmlFor="email">{footerForm.emailLabel}</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        value={emailInput} 
                        onChange={(e) => setEmailInput(e.target.value)} 
                    />
                    {sendState && sendState === "email" && 
                        <MessageModal 
                            text={footerForm.sendEmailError} 
                            setter={setSendState} 
                        />
                    }
                </div>
            </div>
            <div className={styles.textarea}>
                <label htmlFor="text">{footerForm.messageLabel}</label>
                <textarea 
                    name="text" 
                    id="text"
                    value={textInput} 
                    onChange={(e) => setTextInput(e.target.value)} 
                ></textarea>
                {sendState && sendState === "textArea" && 
                    <MessageModal 
                        text={footerForm.sendTextError} 
                        setter={setSendState} 
                    />
                }
            </div>
            <div className={styles.triggers}>
                <button
                    className={`btn ${styles.btn}`}
                    disabled={!sendState && !loadState ? false : true}
                >
                    {footerForm.buttonText}
                </button>
                <div className={styles.policy}>
                    <input 
                        type="checkbox" 
                        name="checkbox" 
                        id="checkbox" 
                        checked={policyInput} 
                        onChange={() => setPolicyInput(!policyInput)}
                    />
                    <label htmlFor="checkbox">{footerForm.privacyLabel}
                        <Link href="/privacy">{footerForm.privacyLink}</Link>
                        {sendState && sendState === "policy" && 
                            <MessageModal 
                                text={footerForm.sendPrivacyError} 
                                setter={setSendState} 
                            />
                        }
                    </label>
                </div>
            </div>
            {sendState && sendState === "success" && 
                <MessageModal 
                    text={footerForm.sendSuccess} 
                    position="fullscreen"
                    setter={setSendState} 
                />
            }
            {sendState && sendState === "unknown" && 
                <MessageModal 
                    text={footerForm.sendUnknownError} 
                    position="fullscreen"
                    setter={setSendState} 
                />
            }
            {loadState &&
                <Loader />
            }
        </form>
    );
};

export default FooterForm;