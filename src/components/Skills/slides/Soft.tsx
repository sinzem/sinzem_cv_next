import { ISoftDOM } from "@/types/language";
import styles from "./slides.module.css";
import { ReactElement } from "react";
import { ISlides } from "@/types/slider";

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
            ${activity === "soft" ? "active" : ""}    
        `}>
            <h3 className="title skills__slider__title">{soft.title}</h3>
            <div className="skills__content skills__content__soft">
                <div className="skills__content__block skills__content__block_top skills__content__block_top__soft">
                    <h3 className="description description_soft_top">{soft.descriptionTop}</h3>
                    <ul className="skills__list list_soft_top">
                        <li><span className="line line_one"></span>{soft.skillTop1}</li>
                        <li><span className="line line_two"></span>{soft.skillTop2}</li>
                        <li><span className="line line_three"></span>{soft.skillTop3}</li>
                        <li><span className="line line_four"></span>{soft.skillTop4}</li>
                        <li><span className="line line_five"></span>{soft.skillTop5}</li>
                    </ul>
                </div>
                <div className="skills__content__block skills__content__block_bottom skills__content__block_bottom__soft">
                    <h3 className="description description_soft_bottom">{soft.descriptionBottom}</h3>
                    <ul className="skills__list list_soft_bottom">
                        <li>{soft.skillBottom1}</li>
                        <li>{soft.skillBottom2}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Soft;