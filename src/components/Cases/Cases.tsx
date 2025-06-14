import { ReactElement } from "react";

import { IPortfolioDOM } from "@/types/language";
import CasesBlock from "./CasesBlock/CasesBlock";
import BasketBlock from "./BasketBlock/BasketBlock";

import styles from "./cases.module.css";


const Cases = ({cases} : {cases: IPortfolioDOM}): ReactElement => {

    return (

        <section id="cases" className={styles.cases_wrap}>
            
            <div className={styles.cases}>
                <h3 className={`subtitle subtitle_main ${styles.subtitle}`}>{cases.title}</h3>
                <h2 className={`title ${styles.subtitle}`}>{cases.subtitle}</h2>
                
                <div className={`divider ${styles.divider}`}></div>
                
                <CasesBlock />

                <div className={styles.clarification}>
                    <h3>{cases.note1}</h3>
                    <h3>{cases.note2} <a href="https://github.com/sinzem" target="_blank"> {cases.note2Link}</a></h3>
                </div>
            </div>
            
            <BasketBlock /> 
            
            <div className={"divider_component"}></div> 
        </section>
          
    );
};

export default Cases;