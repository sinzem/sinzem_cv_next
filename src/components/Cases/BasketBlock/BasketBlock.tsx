"use client";

import {ReactElement, useEffect, useRef, useState} from 'react';

import styles from "./basketBlock.module.css";
import basketCases from "../../../assets/cases/basket";
import BasketCase from '../BasketCase/BasketCase';

const BasketBlock = (): ReactElement => {

    const [showCases, setShowCases] = useState<boolean>(false);
    const [mouseOverSlider, setMouseOverSlider] = useState<boolean>(false);
    // const [dataForBasketAnimation, setDataForBasketAnimation] = useState(); 
    const sliderRef = useRef<HTMLDivElement>(null);
  
  
    const handleWheel = (e: WheelEvent) => {
        if (!sliderRef.current) return;
        e.preventDefault();
        sliderRef.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        const workAreaBackgroundAimation = getDataForBasketAimation();
        // setDataForBasketAnimation(workAreaBackgroundAimation);
        console.log(workAreaBackgroundAimation);

        const casesQuantity = Math.ceil((Math.ceil(basketCases.length / 3) + basketCases.length) / 2) + 1;
        const root = document.documentElement;
        root.style.setProperty('--quantity', `${casesQuantity}`);

        const slider = sliderRef.current;
        if (!slider) return;

        slider.addEventListener("wheel", handleWheel);

        return () => slider.removeEventListener("wheel", handleWheel);   
    }, [])

    const blockDisplay = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        if (!showCases) {
            slider.style.scrollBehavior = "";
            setShowCases(true);
        } else {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft = 0; 
            setShowCases(false);
        }
    }

    const getDataForBasketAimation = () => {
        const itemsBlock = document.querySelector('#cases_block');
        const itemsBlockGap = itemsBlock ? parseInt(getComputedStyle(itemsBlock).gap) : 0;

        const item = document.querySelector(`.${styles.square}`);
        const itemFullWidth = item && itemsBlockGap ? item.scrollWidth * 3 + itemsBlockGap * 2 : 0;

        const itemsWrapperWidth = sliderRef.current ? sliderRef.current.clientWidth : 0;
        const leftAnimationDot = itemsWrapperWidth && itemFullWidth ? Math.round(itemsWrapperWidth / 2 - itemFullWidth / 2) : 0; 
        const rightAnimationDot = itemsWrapperWidth && itemFullWidth ? Math.round(itemsWrapperWidth / 2 + itemFullWidth / 2) : 0; 
    
        return {
            itemsBlockGap,
            itemFullWidth,
            itemsWrapperWidth,
            leftAnimationDot,
            rightAnimationDot,
        };
    }

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) { 
                
    //         }
    //     });
    // }, {
    //     rootMargin: `-${}px 0px -30% 0px`,
    //     threshold: 0.5
    // });
        
        // casesList?.forEach(item => observer.observe(item));
        
        // return () => observer.disconnect();


    return (
        <div className={styles.wrapper}>
            <div className={styles.btn_wrap}>
                <button 
                    className={`btn ${styles.btn}`}
                    onClick={blockDisplay}
                >
                    More
                </button>
            </div>
            <div 
                className={`${styles.cases_wrap} ${showCases ? styles.show : styles.hide}`}
                onMouseEnter={() => setMouseOverSlider(!mouseOverSlider)} 
                onMouseLeave={() => setMouseOverSlider(false)}
                ref={sliderRef}
            >
                <div
                    id="cases_block"
                    className={`${styles.cases_block} ${showCases ? styles.show_block : styles.hide_block}`}
                >
                    {basketCases.map((item, i) => (
                        <div key={item.id} className={`${styles.item}  ${i % 3 === 0 ? styles.wide : styles.square}`}>
                            <BasketCase basketCase={item} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default BasketBlock;