import { ReactElement } from 'react';

import styles from "./casesBlockDesktop.module.css";

import { mainCases } from "@/assets/cases/main";
import Case from '../Case/Case';


const CasesBlockDesktop = (): ReactElement => {

    return (
        <div className={styles.items}>

            {mainCases.map((obj) => (

                <div className={styles.item} key={obj.id}>
        
                    <Case project={obj}/>

                </div>

            ))}
            
        </div>
    );
};

export default CasesBlockDesktop;