import { ReactElement } from "react";

import Slider from "./Slider/Slider";
import { IAboutDOM } from "@/types/language";

import styles from "./skills.module.css";


const Skills = ({skills}: {skills: IAboutDOM}): ReactElement => {

    return (
        <section id="skills" className={styles.skills}>
            <h2 className={`subtitle subtitle_main ${styles.subtitle}`}>
                {skills.title}
            </h2>

                <Slider about={skills}/>

            <div className={"divider_component"}></div>
        </section>
    );
};

export default Skills;