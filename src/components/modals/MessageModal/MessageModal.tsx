"use client";

import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';

import styles from "./messageModal.module.css";
import LoaderGif from "../../../assets/icons/loader.gif";
import Image from 'next/image';
import { IFooterFormState } from '@/types/footerForm';

const MessageModal = ({
    loading = false,
    text,
    position = "line",
    setter,
}: {
    loading?: boolean,
    text: string,
    position?: "line" | "fullscreen",
    setter: Dispatch<SetStateAction<IFooterFormState>>,
}): ReactElement => {

    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        // setVisible(true);

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
        <div className={styles.fullscreen}>
            <div className={styles.wrapper} onClick={() => setter(null)}>
                <div className={styles.message}>
                    {loading && 
                        <Image src={LoaderGif} alt="Loading..." />
                    }
                    {!loading &&
                        <h3>{text}</h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default MessageModal;