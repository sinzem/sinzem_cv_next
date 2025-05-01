import React from 'react';

import styles from "./casesBlock.module.css";
import { mainCases } from "@/assets/cases/main";
import Link from 'next/link';

const CasesBlock = () => {
    return (
        <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[0].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[0].link}></Link>
                </div> 
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[1].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[1].link}></Link>
                </div> 
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[2].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[2].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[3].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[3].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[4].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[4].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[5].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[5].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[6].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[6].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[7].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[7].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[8].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[8].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[9].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[9].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[10].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[10].link}></Link>
                </div>
            </div>
        
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[11].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[11].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[12].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[12].link}></Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[13].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[13].link}></Link>
                </div>
            </div>
            {/* <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[14].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[14].link}></Link>
                </div>
            </div> */}
        </div>
    );
};

export default CasesBlock;