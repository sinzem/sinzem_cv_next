"use client";

import { ReactElement } from "react";
import { useRouter } from "next/navigation";

import styles from "./backButton.module.css";

const BackButton = (): ReactElement => {

    const router = useRouter();

    return (
        <>
            <button 
                onClick={() => router.back()}
                className={`btn ${styles.btn}`}
            >
                Go back
            </button> 
        </>
    );
};

export default BackButton;