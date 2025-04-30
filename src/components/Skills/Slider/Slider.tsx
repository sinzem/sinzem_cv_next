"use client";

import { ReactElement, useState } from 'react';

import styles from "./slider.module.css";
import { IAboutDOM } from '@/types/language';
import Hard from '../slides/Hard';
import Soft from '../slides/Soft';
import General from '../slides/General';
import { ISlides } from '@/types/slider';

const Slider = ({about}: {about: IAboutDOM}): ReactElement => {

    const [activity, setActivity] = useState<ISlides>("hard");

    const changeActiveSlide = (): void => {
        if (activity === "hard") setActivity("soft");
        if (activity === "soft") setActivity("general");
        if (activity === "general") setActivity("hard");
    } 

    return (
        <div className={styles.slider}>
             {/* <div className={styles.slider_wrap}>    */}
                <button 
                    className={`btn ${styles.btn_next} ${styles.btn_desc}`}
                    onClick={changeActiveSlide}  
                >
                    Next
                </button>
                <button 
                    className={`btn ${styles.btn_next} ${styles.btn_mob}`}
                    onClick={changeActiveSlide} 
                >
                    N<br/>e<br/>x<br/>t
                </button>
                <Hard hard={about.hard} activity={activity} />
                <Soft soft={about.soft} activity={activity} />
                <General general={about.general} activity={activity} />
            {/* </div> */}
        </div>
       
    );
};

export default Slider;