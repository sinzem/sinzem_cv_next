import { ReactElement } from "react";

import { IGeneralDOM } from "@/types/language";
import { ISlides } from "@/types/slider";

import styles from "./slides.module.css";

const General = ({
    general,
    activity
}: {
    general: IGeneralDOM,
    activity: ISlides
}): ReactElement => {

    return (
        <div className={`
            ${styles.slide} 
            ${styles.general} 
            ${activity === "general" 
                ? styles.general_active 
                : styles.general_inactive 
            }    
        `}>
            <h3 className={`title ${styles.slider_title}`}>{general.title}</h3>

            <div className={`${styles.content} ${styles.content_general}`}>

                <div className={`${styles.content_block} ${styles.content_block_top} ${styles.content_block_top_general}`}>
                    <ul className={`${styles.list} ${styles.list_general_top}`}>
                        <li>{general.skillTop1}</li>
                        <li>{general.skillTop2}
                            <span className={styles.space}></span>
                            <a href={general.telForLink}>{general.telNumber}</a>
                        </li>
                        <li>{general.skillTop3}</li>
                        <li>{general.skillTop4}</li>
                        <li>{general.skillTop5}</li>
                    </ul>
                </div>

                <div className={`${styles.content_block} ${styles.content_block_bottom} ${styles.content_block_bottom_general}`}>
                    <ul className={`${styles.list} ${styles.list_general_bottom}`}>
                        <li>{general.skillBottom1}</li>
                        <li>{general.skillBottom2}</li>
                        <li>{general.skillBottom3}</li>
                    </ul>
                </div>

            </div>
            
        </div>
    );
};

export default General;