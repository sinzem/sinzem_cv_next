import { IHardDOM } from "@/types/language";
import styles from "./slides.module.css";
import { ReactElement } from "react";
import { ISlides } from "@/types/slider";

const Hard = ({
    hard,
    activity
}: {
    hard: IHardDOM,
    activity: ISlides,
}): ReactElement => {
    return (
        <div className={`
            ${styles.slide} 
            ${styles.hard} 
            ${activity === "hard" 
                ? styles.hard_active 
                : styles.hard_inactive
            }
        `}>
            <h3 className={`title ${styles.title}`}>{hard.title}</h3>
            <div className={`${styles.content} ${styles.content_hard}`}>
                <div className={`${styles.content_block} ${styles.content_block_top}`}>
                <div className={`${styles.content_block_top_wrapper} ${styles.description_wrapper}`}>
                        <h3 className={`${styles.description} ${styles.description_hard} ${styles.description_hard_middle}`}>
                            {hard.descriptionTop}
                        </h3>
                        <h3 className={`${styles.description} ${styles.description_hard_middle_short}`}>
                            {hard.descriptionTopMobile}
                        </h3>
                    </div>
                    <ul className={`${styles.list} ${styles.list_hard_middle}`}>
                        <li>{hard.skillTop1}</li>
                        <li>{hard.skillTop2}</li>
                        <li>{hard.skillTop3}</li>
                        <li>{hard.skillTop4}</li>
                    </ul>
                </div>
                <div className={`${styles.content_block} ${styles.content_block_bottom}`}>
                    <div className={`${styles.content_block_bottom_wrapper} ${styles.description_wrapper}`}>
                        <h3 className={`${styles.description} ${styles.description_hard} ${styles.description_hard_junior}`}>
                            {hard.descriptionBottom}
                        </h3>
                        <h3 className={`${styles.description} ${styles.description_hard_junior_short}`}>
                            {hard.descriptionBottomMobile}
                        </h3>
                    </div>
                    <div className={styles.list_hard_junior}>
                        <ul className={`${styles.list} ${styles.list_hard_junior_top}`}>
                            <li>{hard.skillBottom1}</li>
                            <li>{hard.skillBottom2}</li>
                            <li>{hard.skillBottom3}</li>
                        </ul>
                        <ul className={`${styles.list} ${styles.list_hard_junior_bottom}`}>
                            <li>{hard.skillBottom4}</li>
                            <li>{hard.skillBottom5}</li>
                            <li>{hard.skillBottom6}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hard;