"use client";

import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';

import styles from "./casesBlockMobile.module.css";
import { mainCases } from "@/assets/cases/main";

const CasesBlockMobile = (): ReactElement => {

    const [casesList, setCasesList] = useState<NodeListOf<Element> | null>(null);
    const [activeCase, setActiveCase] = useState<string | null>(null);

    useEffect(() => {
        getCases();

        window.addEventListener("resize", getCases);

        return () => window.removeEventListener("resize", getCases);
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { 
                    setActiveCase(entry.target.id);
                }
            });
        }, {
            rootMargin: "-48% 0px -30% 0px",
            threshold: 0.5
        });
        
        casesList?.forEach(item => observer.observe(item));
        
        return () => observer.disconnect();
    }, [casesList]);
 
 
    const getCases = () => {
        setCasesList(document.querySelectorAll(".item"));
    }


    return (
        <div id="items" className={styles.items} >
            <div id="dotForScale" className={styles.offset}></div>
            <div className={"item"}></div>
            <div id={mainCases[0].id} className={`item ${styles.item} ${activeCase === mainCases[0].id ? styles.active : ""}`}  >
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[0].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[0].link}></Link>
                </div> 
            </div>
            <div id={mainCases[1].id} className={`item ${styles.item} ${activeCase === mainCases[1].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[1].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[1].link}></Link>
                </div> 
            </div>
            <div id={mainCases[2].id} className={`item ${styles.item} ${activeCase === mainCases[2].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[2].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[2].link}></Link>
                </div>
            </div>
            <div id={mainCases[3].id} className={`item ${styles.item} ${activeCase === mainCases[3].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[3].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[3].link}></Link>
                </div>
            </div>
            <div id={mainCases[4].id} className={`item ${styles.item} ${activeCase === mainCases[4].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[4].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[4].link}></Link>
                </div>
            </div>
            <div id={mainCases[5].id} className={`item ${styles.item} ${activeCase === mainCases[5].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[5].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[5].link}></Link>
                </div>
            </div>
            <div id={mainCases[6].id} className={`item ${styles.item} ${activeCase === mainCases[6].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[6].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[6].link}></Link>
                </div>
            </div>
            <div id={mainCases[7].id} className={`item ${styles.item} ${activeCase === mainCases[7].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[7].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[7].link}></Link>
                </div>
            </div>
            <div id={mainCases[8].id} className={`item ${styles.item} ${activeCase === mainCases[8].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[8].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[8].link}></Link>
                </div>
            </div>
            <div id={mainCases[9].id} className={`item ${styles.item} ${activeCase === mainCases[9].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[9].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[9].link}></Link>
                </div>
            </div>
            <div id={mainCases[10].id} className={`item ${styles.item} ${activeCase === mainCases[10].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[10].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[10].link}></Link>
                </div>
            </div>
        
            <div id={mainCases[11].id} className={`item ${styles.item} ${activeCase === mainCases[11].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[11].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[11].link}></Link>
                </div>
            </div>
            <div id={mainCases[12].id} className={`item ${styles.item} ${activeCase === mainCases[12].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[12].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[12].link}></Link>
                </div>
            </div>
            <div id={mainCases[13].id} className={`item ${styles.item} ${activeCase === mainCases[13].id ? styles.active : ""}`}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[13].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[13].link}></Link>
                </div>
            </div>
            {/* <div className={styles.item}>
                <div className={styles.item_internal} style={{backgroundImage: `url(${mainCases[14].url})`}}>
                    <Link className={styles.link} target="_blank" href={mainCases[14].link}></Link>
                </div>
            </div> */}
            <div className={"item"}></div>
        </div>
    );
};

export default CasesBlockMobile;