"use client";

import {ReactElement, useEffect, useRef, useState} from 'react';

import styles from "./basketBlock.module.css";
import basketCases from "../../../assets/cases/basket";
import BasketCase from '../BasketCase/BasketCase';

const casesRightValue: string[] = [];
casesRightValue.length = basketCases.length;
casesRightValue.fill("0%");

const BasketBlock = (): ReactElement => {

    const [showCases, setShowCases] = useState<boolean>(false);
    const [mouseOverSlider, setMouseOverSlider] = useState<boolean>(false);
    const [baskgroundWidth, setBackgroundWidth] = useState<number>(0);
    const [leftBackgroundPosition, setLeftBackgroundPosition] = useState<string[]>(casesRightValue);
    const sliderRef = useRef<HTMLDivElement>(null);
  
  
    const handleWheel = (e: WheelEvent) => {
        if (!sliderRef.current) return;
        e.preventDefault();
        sliderRef.current.scrollLeft += e.deltaY;
    }

  
    useEffect(() => {

        const casesQuantity = Math.ceil((Math.ceil(basketCases.length / 3) + basketCases.length) / 2) + 1;
        const root = document.documentElement;
        root.style.setProperty('--quantity', `${casesQuantity}`);

        const slider = sliderRef.current;
        if (!slider) return;

        let gap = parseInt(getComputedStyle(slider.children[0]).gap);
        let wideCaseWidth = slider.children[0].children[0].scrollWidth;
        let narrowCaseWidth = slider.children[0].children[1].scrollWidth;
        let caseBackgroundWidth = narrowCaseWidth * 3 + gap * 2;
        setBackgroundWidth(caseBackgroundWidth);

        let sliderWrapperWidth = window.innerWidth;
        let leftAnimationDot = Math.round(sliderWrapperWidth / 2 - caseBackgroundWidth / 2); 
        
        let rightActiveDotNarrow = leftAnimationDot + caseBackgroundWidth - narrowCaseWidth;
        let rightActiveDotWide = leftAnimationDot + caseBackgroundWidth - wideCaseWidth;
        let animationAreaNarrow = rightActiveDotNarrow - leftAnimationDot;
        let animationAreaWide = rightActiveDotWide - leftAnimationDot;
        let animationUnitNarrow = animationAreaNarrow / 100;
        let animationUnitWide = animationAreaWide / 100;

        window.addEventListener("resize", () => {
            gap = parseInt(getComputedStyle(slider.children[0]).gap);
            wideCaseWidth = slider.children[0].children[0].scrollWidth
            narrowCaseWidth = slider.children[0].children[1].scrollWidth;
            caseBackgroundWidth = narrowCaseWidth * 3 + gap * 2;
            setBackgroundWidth(caseBackgroundWidth);

            sliderWrapperWidth = window.innerWidth;
            leftAnimationDot = Math.round(sliderWrapperWidth / 2 - caseBackgroundWidth / 2); 
        
            rightActiveDotNarrow = leftAnimationDot + caseBackgroundWidth - narrowCaseWidth;
            rightActiveDotWide = leftAnimationDot + caseBackgroundWidth - wideCaseWidth;
            animationAreaNarrow = rightActiveDotNarrow - leftAnimationDot;
            animationAreaWide = rightActiveDotWide - leftAnimationDot;
            animationUnitNarrow = animationAreaNarrow / 100;
            animationUnitWide = animationAreaWide / 100;
        });

        const sliderChildrens = Array.from(slider.children[0].children);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        }, {
            rootMargin: `-${leftAnimationDot * 0.8}px 0px -${leftAnimationDot * 0.8}px 0px`,
            threshold: 0.5
        });
      
        sliderChildrens.forEach(item => observer.observe(item));

        slider.addEventListener("wheel", handleWheel);

        const getCasesBackgroundPositions = () => {
            sliderChildrens.forEach((slide, i) => {
                if (slide.classList.contains("active")) {
                    const blockPosition = slide.getBoundingClientRect().left;
                    const workToLeft = leftAnimationDot - blockPosition;
                    const workUnit = slide.classList.contains(styles.wide) ? animationUnitWide : animationUnitNarrow;
                    const percentToLeft = workToLeft / workUnit;
                    const rightActiveDot = slide.classList.contains(styles.wide) ? rightActiveDotWide : rightActiveDotNarrow;

                    const newL = leftBackgroundPosition;

                    if (blockPosition > leftAnimationDot && blockPosition < rightActiveDot) {
                        newL[i] = (100 - percentToLeft) * -2 + "%";
                    } else {
                        newL[i] = blockPosition <= leftAnimationDot ? "-200%" : "0%";
                    }

                    setLeftBackgroundPosition(newL);
                    console.log(leftBackgroundPosition);
                } /* else {
                    const newL = leftBackgroundPosition;
                    newL[i] = 0;
                    setLeftBackgroundPosition(newL);
                } */
            })
        }

        slider.addEventListener("scroll", getCasesBackgroundPositions);

        return (() => {
            slider.removeEventListener("wheel", handleWheel);
            slider.removeEventListener("scroll", getCasesBackgroundPositions);
            // window.removeEventListener("resize", workAreaBackgroundAimation);
            observer.disconnect();
        });   
    }, [])

    useEffect(() => {
        console.log(leftBackgroundPosition);
    }, [leftBackgroundPosition])

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


    return (
        <div className={styles.wrapper}>
            <div className={styles.btn_wrap}>
                <button 
                    className={`btn ${styles.btn}`}
                    onClick={blockDisplay}
                >
                    {showCases ? "Hide" : "More"}
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
                            <BasketCase basketCase={item} rightPosition={leftBackgroundPosition[i]} backWidth={baskgroundWidth}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default BasketBlock;