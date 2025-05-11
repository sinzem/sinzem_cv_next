import {ReactElement} from 'react';

import styles from "./basketBlock.module.css";

const BasketBlock = (): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn_wrap}>
                <button className={`btn ${styles.btn}`}>More</button>
            </div>
            
            
        </div>
    );
};

export default BasketBlock;