import { IAboutDOM } from "@/types/language";
import { ReactElement } from "react";

import styles from "./skills.module.css";
import Slider from "./Slider/Slider";

const Skills = ({skills}: {skills: IAboutDOM}): ReactElement => {
    return (
        <div className={styles.skills}>
            <h2 className={`subtitle subtitle_main ${styles.subtitle}`}>
                {skills.title}
            </h2>
                <Slider about={skills}/>
            <div className={"divider_component"}></div>
        </div>
    );
};

export default Skills;