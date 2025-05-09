"use client";

import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';

import { IFooterFormState } from '@/types/footerForm';

import styles from "./messageModal.module.css";


const MessageModal = ({
    text,
    position = "line",
    setter,
}: {
    text: string,
    position?: "line" | "fullscreen",
    setter: Dispatch<SetStateAction<IFooterFormState>>,
}): ReactElement => {

    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => hideModal(), 3000);

        return () => clearTimeout(timeout);
    }, []);

    const hideModal = () => {
        setVisible(false);
        const timeout = setTimeout(() => setter(null), 500);

        return () => clearTimeout(timeout);
    }

    if (position === "line") {
        return (
            <div 
                className={`${visible ? styles.visible : styles.invisible} ${styles.line}`} 
                onClick={hideModal}
            >
                <h3>{text}</h3>
            </div>
        )
    }

    return (
        <div className={`${visible ? styles.visible : styles.invisible} ${styles.fullscreen}`} >
            <div className={styles.wrapper} onClick={hideModal}>
                <div className={styles.message}>
                    <h3>{text}</h3> 
                </div>
            </div>
        </div>
    );
};

export default MessageModal;