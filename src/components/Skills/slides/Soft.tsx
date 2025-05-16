import { ReactElement } from "react";

import { ISoftDOM } from "@/types/language";
import { ISlides } from "@/types/slider";

import styles from "./slides.module.css";


const Soft = ({
    soft,
    activity,
}: {
    soft: ISoftDOM,
    activity: ISlides,
}): ReactElement => {

    return (
        <div className={`
            ${styles.slide} 
            ${styles.soft} 
            ${activity === "soft" 
                ? styles.soft_active 
                : styles.soft_inactive}    
        `}>

            <h3 className={`title ${styles.slider_title}`}>{soft.title}</h3>

            <div className={`${styles.content} ${styles.content_soft}`}>

                <div className={`${styles.content_block} ${styles.content_block_top} ${styles.content_block_top_soft}`}>
                    <h3 className={`${styles.description} ${styles.description_soft_top}`}>{soft.descriptionTop}</h3>
                    <ul className={`${styles.list} ${styles.list_soft_top}`}>
                        <li><span className={`${styles.line} ${styles.line_one}`}></span>{soft.skillTop1}</li>
                        <li><span className={`${styles.line} ${styles.line_two}`}></span>{soft.skillTop2}</li>
                        <li><span className={`${styles.line} ${styles.line_three}`}></span>{soft.skillTop3}</li>
                        <li><span className={`${styles.line} ${styles.line_four}`}></span>{soft.skillTop4}</li>
                        <li><span className={`${styles.line} ${styles.line_five}`}></span>{soft.skillTop5}</li>
                    </ul>
                </div>

                <div className={`${styles.content_block} ${styles.content_block_bottom} ${styles.content_block_bottom_soft}`}>
                    <h3 className={`${styles.description} ${styles.description_soft_bottom}`}>{soft.descriptionBottom}</h3>
                    <ul className={`${styles.list} ${styles.list_soft_bottom}`}>
                        <li>{soft.skillBottom1}</li>
                        <li>{soft.skillBottom2}</li>
                    </ul>
                </div>

            </div>
            
        </div>
    );
};

export default Soft;