import { IGeneralDOM } from "@/types/language";
import styles from "./slides.module.css";
import { ISlides } from "@/types/slider";

const General = ({
    general,
    activity
}: {
    general: IGeneralDOM,
    activity: ISlides
}) => {
    return (
        <div className={`
            ${styles.slide} 
            ${styles.general} 
            ${activity === "general" 
                ? styles.general_active 
                : styles.general_inactive 
            }    
        `}>
            <h3 className="title skills__slider__title">{general.title}</h3>
            <div className="skills__content skills__content__general">
                <div className="skills__content__block skills__content__block_top skills__content__block_top__general">
                    <ul className="skills__list list_general_top">
                        <li>{general.skillTop1}</li>
                        <li>{general.skillTop2} <span className="space"></span><a href={general.telForLink}>{general.telNumber}</a></li>
                        <li>{general.skillTop3}</li>
                        <li>{general.skillTop4}</li>
                        <li>{general.skillTop5}</li>
                    </ul>
                </div>
                <div className="skills__content__block skills__content__block_bottom skills__content__block_bottom__general">
                    <ul className="skills__list list_general_bottom">
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