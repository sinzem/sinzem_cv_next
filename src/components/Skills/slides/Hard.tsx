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
            ${activity === "hard" ? "active" : ""}
        `}>
            <h3 className={`title ${styles.title}`}>{hard.title}</h3>
            <div className="skills__content skills__content__hard">
                <div className="skills__content__block skills__content__block_top">
                    <div className="skills__content__block_top__wrapper description__wrapper">
                        <h3 className="description description description_hard  description_hard_middle">
                            {hard.descriptionTop}
                        </h3>
                        <h3 className="description description_hard_middle_short">
                            {hard.descriptionTopMobile}
                        </h3>
                    </div>
                    <ul className="skills__list list_hard_middle">
                        <li>{hard.skillTop1}</li>
                        <li>{hard.skillTop2}</li>
                        <li>{hard.skillTop3}</li>
                        <li>{hard.skillTop4}</li>
                    </ul>
                </div>
                <div className="skills__content__block skills__content__block_bottom">
                    <div className="skills__content__block_bottom__wrapper description__wrapper">
                        <h3 className="description description_hard  description_hard_junior">
                            {hard.descriptionBottom}
                        </h3>
                        <h3 className="description description_hard_junior_short">
                            {hard.descriptionBottomMobile}
                        </h3>
                    </div>
                    <div className="list_hard_junior">
                        <ul className="skills__list list_hard_junior_top">
                            <li>{hard.skillBottom1}</li>
                            <li>{hard.skillBottom2}</li>
                            <li>{hard.skillBottom3}</li>
                        </ul>
                        <ul className="skills__list list_hard_junior_bottom">
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