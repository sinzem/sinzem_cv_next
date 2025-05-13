"use client";

import {ReactElement, useState} from 'react';

import styles from "./basketBlock.module.css";
import basketCases from "../../../assets/cases/basket";
import BasketCase from '../BasketCase/BasketCase';

const BasketBlock = (): ReactElement => {

    const [showCases, setShowCases] = useState<boolean>(false);

    const casesQuantity = Math.ceil((Math.ceil(basketCases.length / 3) + basketCases.length) / 2) + 2;

    return (
        <div className={styles.wrapper}>
            <div className={styles.btn_wrap}>
                <button 
                    className={`btn ${styles.btn}`}
                    onClick={() => setShowCases(!showCases)}
                >
                    More
                </button>
            </div>
            <div className={`${styles.cases_wrap} ${showCases ? styles.show : styles.hide}`}>
                <div className={`${styles.cases_block} ${showCases ? styles.show_block : styles.hide_block}`}
                style={{gridTemplateColumns: `repeat(${casesQuantity}, 180px)`}}
            >
                    {basketCases.map((item, i) => (
                        <div key={item.id} className={`${styles.item}  ${i % 3 === 0 ? styles.wide : styles.square}`}>
                            <BasketCase basketCase={item} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default BasketBlock;