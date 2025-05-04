import {ReactElement} from 'react';

import styles from "./footrForm.module.css";
import { IFooterFormDOM } from '@/types/language';
import Link from 'next/link';

const FooterForm = ({
    footerForm
}: {
    footerForm: IFooterFormDOM
}): ReactElement => {
    
    return (
        <form id="my-letter" action="#" className={styles.form}>
            <div className={styles.input_wrap}>
                <div className={styles.input}>
                    <label htmlFor="name">{footerForm.nameLabel}</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className={styles.input}>
                    <label htmlFor="email">{footerForm.emailLabel}</label>
                    <input type="email" name="email" id="email" required />
                </div>
            </div>
            <div className={styles.textarea}>
                <label htmlFor="text">{footerForm.messageLabel}</label>
                <textarea name="text" id="text"></textarea>
            </div>
            <div className={styles.triggers}>
                <button className={`btn ${styles.btn}`}>{footerForm.buttonText}</button>
                <div className={styles.policy}>
                    <input type="checkbox" name="checkbox" id="checkbox" required />
                    <label htmlFor="checkbox">{footerForm.privacyLabel}
                        <Link href="/privacy">{footerForm.privacyLink}</Link>
                    </label>
                </div>
            </div>
        </form>
    );
};

export default FooterForm;