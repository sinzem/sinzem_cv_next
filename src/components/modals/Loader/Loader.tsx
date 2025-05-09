import { ReactElement } from 'react';
import Image from 'next/image';

import styles from "./loader.module.css";
import loader from "../../../assets/icons/loader.gif";

const Loader = (): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.img} src={loader} alt="loading..."/>
        </div>
    );
};

export default Loader;