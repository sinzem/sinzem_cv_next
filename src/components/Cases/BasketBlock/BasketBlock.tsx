"use client";

import {ReactElement, RefObject, useCallback, useEffect, useRef, useState} from 'react';
import Link from 'next/link';

import { IDataForAnimation } from '@/types/case';
import { throttle } from '@/libs/throttler';

import styles from "./basketBlock.module.css";
import basketCases from "../../../assets/cases/basket";


const BasketBlock = (): ReactElement => {

    const [showCases, setShowCases] = useState<boolean>(false);
    const [mouseOverSlider, setMouseOverSlider] = useState<boolean>(false);
    const [slidesBackPosition, setSlidesBackPosition] = useState<number[]>(new Array(basketCases.length).fill(0));
    const [dataForAnimation, setDataForAnimation] = useState<IDataForAnimation>({
        sliderWrapperWidth: 0,
        caseBackgroundWidth: 0,
        leftAnimationDot: 0, 
        animationUnit: 0,
    } );

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const initAnimationData = () => {
            setDataForAnimation(getDataForAnimation(slider));
        }
        initAnimationData();

        let resizeTimeout: NodeJS.Timeout;
        function renewAnimationData() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                initAnimationData();
            }, 300);
        };

        const wheelListener = (e: WheelEvent) => handleWheel(e, sliderRef);
        slider.addEventListener("wheel", wheelListener);
        window.addEventListener("resize", renewAnimationData);

        return (() => {
            slider.removeEventListener("wheel", wheelListener);
            window.removeEventListener("resize", renewAnimationData);
        });   
    }, [])

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        
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
            rootMargin: `0px 0px 0px 0px`,
            threshold: 0
        });

        sliderChildrens.forEach(item => observer.observe(item));

        const newBaskgroundPosition = throttle(moveCasesBackground, 200);

        const changeBackgroundPosition = () => {
            requestAnimationFrame(() => {
                newBaskgroundPosition(slider);
            })
        }

        slider.addEventListener("scroll", changeBackgroundPosition);

        return () =>{
                observer.disconnect();
                slider.removeEventListener("scroll", changeBackgroundPosition);
            }
    }, [dataForAnimation])

    const moveCasesBackground = useCallback((slider: HTMLDivElement) => {
        Array.from(slider.children[0].children).forEach((child, i) => {
            if (child.classList.contains("active")) {
                const blockPosition = child.getBoundingClientRect().left;
                const workToLeft = dataForAnimation.leftAnimationDot - blockPosition;
                const workIndex = child.classList.contains("case_wide") ? 0.333 : 0.666;
                const percentToLeft = workToLeft / dataForAnimation.animationUnit;
            
                if (blockPosition > dataForAnimation.leftAnimationDot && blockPosition < dataForAnimation.sliderWrapperWidth) {
                    setSlidesBackPosition(prev => prev.map((item, index) => index === i ? -(100 - -percentToLeft) * workIndex : item))
                } else {
                    setSlidesBackPosition(prev => prev.map((item, index) => index !== i ? item : blockPosition <= dataForAnimation.leftAnimationDot ? -100 * workIndex : 0))
                }
            }
        })
    }, [dataForAnimation])

    const blockDisplay = useCallback(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        if (!showCases) {
            // slider.style.scrollBehavior = "";
            setSlidesBackPosition(new Array(basketCases.length).fill(0));
            setShowCases(true);
        } else {
            // slider.style.scrollBehavior = "smooth";
            slider.scrollLeft = 0; 
            setShowCases(false);
        }
    }, [showCases, sliderRef])


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
                        <div 
                            key={item.id} 
                            data-index={i}
                            className={`
                                ${styles.item} 
                                ${i % 3 === 0 ? styles.wide : styles.square}
                                ${i % 3 === 0 ? "case_wide" : "case_narrow"}
                            `}
                        >
                            <Link 
                                className={styles.link} 
                                href={item.link}
                                target="_blank" 
                                style={{
                                    backgroundImage: `url(${item.url})`,
                                    left: `${slidesBackPosition[i]}%`
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default BasketBlock;


function handleWheel (e: WheelEvent, block: RefObject<HTMLDivElement | null>) {
    e.preventDefault();
    if (!block.current) return;
    block.current.scrollLeft += e.deltaY * 0.6;
}

function getDataForAnimation(block: HTMLDivElement): IDataForAnimation {
    const caseBackgroundWidth = block.children[0].children[0].children[0].scrollWidth || 0;
    const sliderWrapperWidth = window.innerWidth;
    const leftAnimationDot = 0; 
    const animationUnit = sliderWrapperWidth / 100;

    return {
        sliderWrapperWidth,
        caseBackgroundWidth,
        leftAnimationDot, 
        animationUnit,
    } 
}


