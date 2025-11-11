import { ReactElement, useMemo } from 'react';

import styles from "./casesBlockDesktop.module.css";

import { mainCases } from "@/assets/cases/main";
import Case from '../Case/Case';


const CasesBlockDesktop = (): ReactElement => {

    const cases = useMemo(() => mainCases, [mainCases]);

    return (
        <div className={styles.items}>

            {cases.map((obj) => (

                <div className={styles.item} key={obj.id}>
        
                    <Case project={obj}/>

                </div>

            ))}
            
        </div>
    );
};

export default CasesBlockDesktop;