"use client";

import { ReactElement, useEffect, useState } from 'react';

import styles from "./casesBlockMobile.module.css";
import { mainCases } from "@/assets/cases/main";
import Link from 'next/link';

const CasesBlockMobile = (): ReactElement => {


    const [casesList, setCasesList] = useState<NodeListOf<Element> | null>(null);
    // const [dotForScale, setDotForScale] = useState(0);
    const [activeCase, setActiveCase] = useState<string | null>(null);

    useEffect(() => {
        getDotAndCases();
    }, [])

    useEffect(() => {
        // const cases = document.querySelectorAll(".items");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { 
                    setActiveCase(entry.target.id);
                }
            });
   
        }, {
            rootMargin: "-55% 0px -35% 0px",
            threshold: 0.5
        });
        
        casesList?.forEach(item => observer.observe(item));
        
        return () => observer.disconnect();
      }, [casesList]);
 
 

   useEffect(() => {
        // console.log(casesList);
        // console.log(dotForScale);
        console.log(activeCase);
  
   }, [activeCase])

     const getDotAndCases = () => {
        setCasesList(document.querySelectorAll(".item"));
        // setDotForScale(document.querySelector("#dotForScale").offsetTop);
    }



    return (
        <div id="items" className={styles.items} >
            <div id="dotForScale" className={styles.offset}></div>
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

export default CasesBlockMobile;