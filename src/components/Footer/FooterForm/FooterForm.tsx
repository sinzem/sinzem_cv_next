"use client";

import {ReactElement, useState} from 'react';

import styles from "./footerForm.module.css";
import { IFooterFormDOM } from '@/types/language';
import Link from 'next/link';
import { IFooterFormState } from '@/types/footerForm';
import * as sanitizeHtml from 'sanitize-html';
import MessageModal from '@/components/modals/MessageModal/MessageModal';

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

    const sanitizeText = (str: string): string => {
        const checkMessage = sanitizeHtml(str, {
            allowedTags: ["em", "b", "i", "strong", "code", "a"],
            allowedAttributes: {
                a: [ 'href', "title" ],
            },
        });
        return checkMessage;
    }

    const sendMessasge = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const nameForSend = sanitizeText(nameInput.trim());
        if (!nameForSend.length || nameForSend.length < 2) {
            setSendState("name");
            setLoadState(false)
            return;
        }
        if (!policyInput) {
            setSendState("policy");
            return;
        }
    }   

    
    return (
        <form id="my-letter" action="#" className={styles.form} onSubmit={(e) => sendMessasge(e)} >
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
                            loading={loadState} 
                            text={footerForm.sendNameError} 
                            setter={setSendState} 
                        />
                    }
                </div>
                <div className={styles.input}>
                    <label htmlFor="email">{footerForm.emailLabel}</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={emailInput} 
                        onChange={(e) => setEmailInput(e.target.value)} 
                    />
                    {sendState && sendState === "email" && 
                        <MessageModal 
                            loading={loadState} 
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
                        loading={loadState} 
                        text={footerForm.sendTextError} 
                        setter={setSendState} 
                    />
                }
            </div>
            <div className={styles.triggers}>
                <button className={`btn ${styles.btn}`}>{footerForm.buttonText}</button>
                <div className={styles.policy}>
                    <input 
                        type="checkbox" 
                        name="checkbox" 
                        id="checkbox" 
                        value={textInput} 
                        onChange={() => setPolicyInput(!policyInput)}
                    />
                    <label htmlFor="checkbox">{footerForm.privacyLabel}
                        <Link href="/privacy">{footerForm.privacyLink}</Link>
                    </label>
                    {sendState && sendState === "policy" && 
                        <MessageModal 
                            loading={loadState} 
                            text={footerForm.sendPrivacyError} 
                            setter={setSendState} 
                        />
                    }
                </div>
            </div>
        </form>
    );
};

export default FooterForm;