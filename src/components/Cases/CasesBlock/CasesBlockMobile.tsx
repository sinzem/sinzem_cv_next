"use client";

import { ReactElement, useEffect, useMemo, useState } from 'react';

import styles from "./casesBlockMobile.module.css";
import { mainCases } from "@/assets/cases/main";
import Case from '../Case/Case';

const CasesBlockMobile = (): ReactElement => {

    const [casesList, setCasesList] = useState<NodeListOf<Element> | null>(null);
    const [activeCase, setActiveCase] = useState<string | null>(null);

    const cases = useMemo(() => mainCases, [mainCases]);

    useEffect(() => {
        setCasesList(document.querySelectorAll(".item"));
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
 

    return (

        <div id="items" className={styles.items} >
            <div id="dotForScale" className={styles.offset}></div>

            <div className={"item"}></div> {/* (даст activeCase = null) */}

            {cases.map((obj) => (
                <div 
                    id={obj.id} 
                    key={obj.id}
                    className={`item ${styles.item} ${activeCase === obj.id ? styles.active : ""}`}  
                >

                    <Case project={obj}/>

                </div>
            ))}
            
            <div className={"item"}></div> {/* (даст activeCase = null) */}

        </div>
    );
};

export default CasesBlockMobile;