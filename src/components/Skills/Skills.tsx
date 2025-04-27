import { IAboutDOM } from "@/types/language";
import { ReactElement } from "react";

import styles from "./skills.module.css";

const Skills = ({skills}: {skills: IAboutDOM}): ReactElement => {
    return (
        <div className={styles.skills}>
            <h2 className={styles.title}>{skills.title}</h2>
            <button className={`btn ${styles.btn_next}`}>N<br/>e<br/>x<br/>t</button>
            <div className="skills__slider">
                <div className="skills__slider__wrap">
                    <div className="skills__slide skills__slide_hard">
                        <h3 className="title skills__slider__title">Hard skills</h3>
                        <div className="skills__content skills__content__hard">
                            <div className="skills__content__block skills__content__block_top">
                                <div className="skills__content__block_top__wrapper description__wrapper">
                                    <h3 className="description description description_hard  description_hard_middle">
                                        I acquired the skills for this block while studying online courses from the Udemy school and materials from the Internet
                                    </h3>
                                    <h3 className="description description_hard_middle_short">
                                        Middle level
                                    </h3>
                                </div>
                                <ul className="skills__list list_hard_middle">
                                    <li>HTML</li>
                                    <li>CSS, SCSS</li>
                                    <li>JavaScript</li>
                                    <li>React, Redux</li>
                                </ul>
                            </div>
                            <div className="skills__content__block skills__content__block_bottom">
                                <div className="skills__content__block_bottom__wrapper description__wrapper">
                                    <h3 className="description description_hard  description_hard_junior">
                                        The following skills were obtained from different youtube channels
                                    </h3>
                                    <h3 className="description description_hard_junior_short">
                                        Junior level
                                    </h3>
                                </div>
                                <div className="list_hard_junior">
                                    <ul className="skills__list list_hard_junior_top">
                                        <li>SQL (PostgreSQL, MySQL)</li>
                                        <li>PHP</li>
                                        <li>Node.js</li>
                                    </ul>
                                    <ul className="skills__list list_hard_junior_bottom">
                                        <li>Gulp</li>
                                        <li>Git</li>
                                        <li>SEO</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills__slide skills__slide_soft">
                        <h3 className="title skills__slider__title">Soft skills</h3>
                        <div className="skills__content skills__content__soft">
                            <div className="skills__content__block skills__content__block_top skills__content__block_top__soft">
                                <h3 className="description description_soft_top">
                                    Personal qualities
                                </h3>
                                <ul className="skills__list list_soft_top">
                                    <li><span className="line line_one"></span>Responsible attitude to work</li>
                                    <li><span className="line line_two"></span>Interest in development</li>
                                    <li><span className="line line_three"></span>Learning ability</li>
                                    <li><span className="line line_four"></span>Good written and verbal communication skills</li>
                                    <li><span className="line line_five"></span>Desire to work and earn money</li>
                                </ul>
                            </div>
                            <div className="skills__content__block skills__content__block_bottom skills__content__block_bottom__soft">
                                <h3 className="description description_soft_bottom">
                                    English level
                                </h3>
                                <ul className="skills__list list_soft_bottom">
                                    <li>A2</li>
                                    <li>(continuing education)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="skills__slide skills__slide_general">
                        <h3 className="title skills__slider__title">General informations</h3>
                        <div className="skills__content skills__content__general">
                            <div className="skills__content__block skills__content__block_top skills__content__block_top__general">
                                <ul className="skills__list list_general_top">
                                    <li>Full age: 41</li>
                                    <li>Phone number: <span className="space"></span><a href="tel:+380934104512">+38 (093) 410-45-12</a></li>
                                    <li>Place of residence: Kharkiv</li>
                                    <li>Experiance in development: 2 years</li>
                                    <li>Participation in commercial projects: 4 months</li>
                                </ul>
                            </div>
                            <div className="skills__content__block skills__content__block_bottom skills__content__block_bottom__general">
                                <ul className="skills__list list_general_bottom">
                                    <li>{skills.general.skillBottom1}</li>
                                    <li>At the moment I devote all my free time to studying English and IT</li>
                                    <li>Ready to start working immediately (remote only)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"divider_component"}></div>
        </div>
    );
};

export default Skills;