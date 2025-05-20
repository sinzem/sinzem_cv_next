import { ReactElement } from "react";
import Link from "next/link";

import styles from "./notFoundPage.module.css";
import BackButton from "@/components/buttons/BackButton/BackButton";


const NotFoundPage = (): ReactElement => {
    return (
        <div className={styles.wrap}>
            <h2 className={`title ${styles.title}`}>Sorry, the page with this address was not found...</h2>
            <div className={styles.buttons}>
                <Link className={`btn ${styles.btn}`} href="/">Main page</Link>
                <BackButton />
            </div>
        </div>
    )
}

export default  NotFoundPage;