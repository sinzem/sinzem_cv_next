"use client";

import {ReactElement, RefObject, useEffect, useRef, useState} from 'react';

import styles from "./basketBlock.module.css";
import basketCases from "../../../assets/cases/basket";
import Link from 'next/link';
import { IDateForAnimation } from '@/types/case';


const BasketBlock = (): ReactElement => {

    const [showCases, setShowCases] = useState<boolean>(false);
    const [mouseOverSlider, setMouseOverSlider] = useState<boolean>(false);
    const [slidesBackPosition, setSlidesBackPosition] = useState<number[]>(new Array(basketCases.length).fill(0));
    const [dataForAnimation, setDataForAnimation] = useState<IDateForAnimation>({
        sliderWrapperWidth: 0,
        wideCaseWidth: 0,
        narrowCaseWidth: 0,
        caseBackgroundWidth: 0,
        leftAnimationDot: 0, 
        rightActiveDotNarrow: 0,
        rightActiveDotWide: 0,
        animationAreaNarrow: 0,
        animationAreaWide: 0,
        animationUnitNarrow: 0,
        animationUnitWide: 0,
    } );

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const casesQuantity = basketCases.length + basketCases.length / 3;
        const root = document.documentElement;
        root.style.setProperty('--quantity', `${casesQuantity}`);

        const slider = sliderRef.current;
        if (!slider) return;

        const initAnimationData = () => {
            const animationData = getDataForAnimation(slider);
            setDataForAnimation(animationData);
        }

        initAnimationData();

        let resizeTimeout: NodeJS.Timeout;
        function renewAnimationData() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                initAnimationData();
            }, 300);
        };

        window.addEventListener("resize", renewAnimationData);

        const wheelListener = (e: WheelEvent) => handleWheel(e, sliderRef);

        slider.addEventListener("wheel", wheelListener);

        return (() => {
            slider.removeEventListener("wheel", wheelListener);
            window.removeEventListener("resize", renewAnimationData);
        });   
    }, [])

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        
        const sliderChildrens = Array.from(slider.children[0].children);
        // const rootMarginDot = dataForAnimation.leftAnimationDot ? Math.round(dataForAnimation.leftAnimationDot / 2) : 0;

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
            threshold: 0.5
        });

        sliderChildrens.forEach(item => observer.observe(item));

        const changeBackgroundPosition = () => {
            requestAnimationFrame(() => {
                Array.from(slider.children[0].children).forEach((child, i) => {
                    if (child.classList.contains("active")) {
                        const blockPosition = child.getBoundingClientRect().left;

                        const rightActiveDot = child.classList.contains("case_wide") ? dataForAnimation.rightActiveDotWide : dataForAnimation.rightActiveDotNarrow;

                        const workToLeft = dataForAnimation.leftAnimationDot - blockPosition;
                        
                        const workUnit = child.classList.contains("case_wide") ? dataForAnimation.animationUnitWide : dataForAnimation.animationUnitNarrow;

                        const workIndex = child.classList.contains("case_wide") ? 0.5 : 2.2;

                        const percentToLeft = workToLeft / workUnit;

                        console.log(dataForAnimation, i);
                    
                        // if (blockPosition > dataForAnimation.leftAnimationDot && blockPosition < rightActiveDot) {
                        if (blockPosition > dataForAnimation.leftAnimationDot && blockPosition < rightActiveDot) {
            
                            setSlidesBackPosition(prev => prev.map((item, index) => index === i ? -(100 - -percentToLeft) * workIndex : item))
                    
                        } else {
                
                            setSlidesBackPosition(prev => prev.map((item, index) => index !== i ? item : blockPosition <= dataForAnimation.leftAnimationDot ? -100 * workIndex : 0))
                        }
                    }
                })
            })
        }

        slider.addEventListener("scroll", changeBackgroundPosition);

        return () =>{
                observer.disconnect();
                slider.removeEventListener("scroll", changeBackgroundPosition);
            }
    }, [dataForAnimation.sliderWrapperWidth])

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
                                    width: `${dataForAnimation.caseBackgroundWidth}px`,
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
    requestAnimationFrame(() => {
        if (!block.current) return;
        block.current.scrollLeft += e.deltaY/*  * 0.6 */;
    })
}

function getDataForAnimation(block: HTMLDivElement): IDateForAnimation {
    const casesBlockGap = parseInt(getComputedStyle(block.children[0]).gap);
    const wideCaseWidth = block.children[0].children[0].scrollWidth;
    const narrowCaseWidth = block.children[0].children[1].scrollWidth;
    const caseBackgroundWidth = narrowCaseWidth * 3 + casesBlockGap * 2;

    const sliderWrapperWidth = window.innerWidth;
    const leftAnimationDot = /* Math.round(sliderWrapperWidth / 2 - caseBackgroundWidth / 2) || */ 0; 
    
    // const rightActiveDotNarrow = leftAnimationDot + caseBackgroundWidth - narrowCaseWidth;
    // const rightActiveDotWide = leftAnimationDot + caseBackgroundWidth - wideCaseWidth;
    const rightActiveDotNarrow = sliderWrapperWidth - narrowCaseWidth;
    const rightActiveDotWide = sliderWrapperWidth - wideCaseWidth;
    const animationAreaNarrow = rightActiveDotNarrow - leftAnimationDot;
    const animationAreaWide = rightActiveDotWide - leftAnimationDot;
    const animationUnitNarrow = animationAreaNarrow / 100;
    const animationUnitWide = animationAreaWide / 100;

    return {
        sliderWrapperWidth,
        wideCaseWidth,
        narrowCaseWidth,
        caseBackgroundWidth,
        leftAnimationDot, 
        rightActiveDotNarrow,
        rightActiveDotWide,
        animationAreaNarrow,
        animationAreaWide,
        animationUnitNarrow,
        animationUnitWide,
    } 
}

// =============================================================

// "use client";

// import {ReactElement, RefObject, useEffect, useRef, useState} from 'react';

// import styles from "./basketBlock.module.css";
// import basketCases from "../../../assets/cases/basket";
// import Link from 'next/link';
// import { IDateForAnimation } from '@/types/case';


// const BasketBlock = (): ReactElement => {

//     const [showCases, setShowCases] = useState<boolean>(false);
//     const [sliderLeftPos, setSliderLeftPos] = useState<number[]>([0, 0]);
//     const [mouseOverSlider, setMouseOverSlider] = useState<boolean>(false);
//     const [slidesBackPosition, setSlidesBackPosition] = useState<number[]>(new Array(basketCases.length).fill(0));
//     const [dataForAnimation, setDataForAnimation] = useState<IDateForAnimation>({
//         wideCaseWidth: 0,
//         narrowCaseWidth: 0,
//         caseBackgroundWidth: 0,
//         leftAnimationDot: 0, 
//         rightActiveDotNarrow: 0,
//         rightActiveDotWide: 0,
//         animationAreaNarrow: 0,
//         animationAreaWide: 0,
//         animationUnitNarrow: 0,
//         animationUnitWide: 0,
//     } );

//     const sliderRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const casesQuantity = basketCases.length + basketCases.length / 3;
//         const root = document.documentElement;
//         root.style.setProperty('--quantity', `${casesQuantity}`);

//         const slider = sliderRef.current;
//         if (!slider) return;

//         const initAnimationData = () => {
//             const animationData = getDataForAnimation(slider);
//             setDataForAnimation(animationData);
//         }

//         initAnimationData();

//         let resizeTimeout: NodeJS.Timeout;
//         function renewAnimationData() {
//             clearTimeout(resizeTimeout);
//             resizeTimeout = setTimeout(() => {
//                 initAnimationData();
//             }, 300);
//         };

//         window.addEventListener("resize", renewAnimationData);

//         const wheelListener = (e: WheelEvent) => handleWheel(e, sliderRef);

//         slider.addEventListener("wheel", wheelListener);

//         return (() => {
//             slider.removeEventListener("wheel", wheelListener);
//             window.removeEventListener("resize", renewAnimationData);
//         });   
//     }, [])

//     useEffect(() => {
//         const slider = sliderRef.current;
//         if (!slider) return;
        
//         const sliderChildrens = Array.from(slider.children[0].children);
//         const rootMarginDot = dataForAnimation.leftAnimationDot ? Math.round(dataForAnimation.leftAnimationDot / 2) : 0;

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("active");
//                 } else {
//                     entry.target.classList.remove("active");
//                 }
                
//             });
//         }, {
//             rootMargin: `-${rootMarginDot}px 0px -${rootMarginDot}px 0px`,
//             threshold: 0.5
//         });

//         sliderChildrens.forEach(item => observer.observe(item));

//         const changeBackgroundPosition = () => {
//             const differense = slider.scrollLeft - sliderLeftPos[0]; 
//             console.log([slider.scrollLeft, sliderLeftPos[0]]);
//             setSliderLeftPos([slider.scrollLeft, differense])
//             requestAnimationFrame(() => {
//                 Array.from(slider.children[0].children).forEach((child, i) => {
//                     if (child.classList.contains("active")) {
//                         const blockPosition = child.getBoundingClientRect().left;

//                         const rightActiveDot = child.classList.contains("case_wide") ? dataForAnimation.rightActiveDotWide : dataForAnimation.rightActiveDotNarrow;

//                         const workToLeft = dataForAnimation.leftAnimationDot - blockPosition;
                        
//                         const workUnit = child.classList.contains("case_wide") ? dataForAnimation.animationUnitWide : dataForAnimation.animationUnitNarrow;

//                         const workIndex = child.classList.contains("case_wide") ? 0.5 : 2.2;

//                         const percentToLeft = workToLeft / workUnit;
                    
//                         if (blockPosition > dataForAnimation.leftAnimationDot && blockPosition < rightActiveDot) {
            
//                             setSlidesBackPosition(prev => prev.map((item, index) => index === i ? -(100 - -percentToLeft) * workIndex : item))
                    
//                         } else {
                
//                             setSlidesBackPosition(prev => prev.map((item, index) => index !== i ? item : blockPosition <= dataForAnimation.leftAnimationDot ? -100 * workIndex : 0))
//                         }
//                     }
//                 })
//             })
//         }

//         slider.addEventListener("scroll", changeBackgroundPosition);

//         return () =>{
//                 observer.disconnect();
//                 slider.removeEventListener("scroll", changeBackgroundPosition);
//             }
//     }, [dataForAnimation.leftAnimationDot])

//     // useEffect(() => {
//     //     const slider = sliderRef.current;
//     //     if (!slider) return;
//     //     const changeBackgroundPosition = () => {
//     //         const differense = slider.scrollLeft - sliderLeftPos[0]; 
//     //         setSliderLeftPos([slider.scrollLeft, differense]);

//     //         requestAnimationFrame(() => {
//     //             Array.from(slider.children[0].children).forEach((child, i) => {
//     //                 if (child.classList.contains("active")) {
//     //                     setSlidesBackPosition(prev => prev.map((item, index) => index === i ? item + (-differense / 8) : item))
//     //                 }
//     //             })
//     //         })   
//     //     }

//     //     slider.addEventListener("scroll", changeBackgroundPosition);

//     //     return () => slider.removeEventListener("scroll", changeBackgroundPosition);
//     // }, [sliderLeftPos[0]])

//     const blockDisplay = () => {
//         const slider = sliderRef.current;
//         if (!slider) return;
//         if (!showCases) {
//             slider.style.scrollBehavior = "";
//             setShowCases(true);
//         } else {
//             slider.style.scrollBehavior = "smooth";
//             slider.scrollLeft = 0; 
//             setShowCases(false);
//         }
//     }


//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.btn_wrap}>
//                 <button 
//                     className={`btn ${styles.btn}`}
//                     onClick={blockDisplay}
//                 >
//                     {showCases ? "Hide" : "More"}
//                 </button>
//             </div>
//             <div 
//                 className={`${styles.cases_wrap} ${showCases ? styles.show : styles.hide}`}
//                 onMouseEnter={() => setMouseOverSlider(!mouseOverSlider)} 
//                 onMouseLeave={() => setMouseOverSlider(false)}
//                 ref={sliderRef}
//             >
//                 <div
//                     id="cases_block"
//                     className={`${styles.cases_block} ${showCases ? styles.show_block : styles.hide_block}`}
//                 >
//                     {basketCases.map((item, i) => (
//                         <div 
//                             key={item.id} 
//                             data-index={i}
//                             className={`
//                                 ${styles.item} 
//                                 ${i % 3 === 0 ? styles.wide : styles.square}
//                                 ${i % 3 === 0 ? "case_wide" : "case_narrow"}
//                             `}
//                         >
//                             <Link 
//                                 className={styles.link} 
//                                 href={item.link}
//                                 target="_blank" 
//                                 style={{
//                                     backgroundImage: `url(${item.url})`,
//                                     width: `${dataForAnimation.caseBackgroundWidth}px`,
//                                     left: `${slidesBackPosition[i]}%`
//                                 }}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
            
//         </div>
//     );
// }

// export default BasketBlock;


// function handleWheel (e: WheelEvent, block: RefObject<HTMLDivElement | null>) {
//     e.preventDefault();
//     requestAnimationFrame(() => {
//         if (!block.current) return;
//         block.current.scrollLeft += e.deltaY/*  * 0.6 */;
//     })
// }

// function getDataForAnimation(block: HTMLDivElement): IDateForAnimation {
//     const casesBlockGap = parseInt(getComputedStyle(block.children[0]).gap);
//     const wideCaseWidth = block.children[0].children[0].scrollWidth;
//     const narrowCaseWidth = block.children[0].children[1].scrollWidth;
//     const caseBackgroundWidth = narrowCaseWidth * 3 + casesBlockGap * 2;

//     const sliderWrapperWidth = window.innerWidth;
//     const leftAnimationDot = Math.round(sliderWrapperWidth / 2 - caseBackgroundWidth / 2) || 0; 
    
//     const rightActiveDotNarrow = leftAnimationDot + caseBackgroundWidth - narrowCaseWidth;
//     const rightActiveDotWide = leftAnimationDot + caseBackgroundWidth - wideCaseWidth;
//     const animationAreaNarrow = rightActiveDotNarrow - leftAnimationDot;
//     const animationAreaWide = rightActiveDotWide - leftAnimationDot;
//     const animationUnitNarrow = animationAreaNarrow / 100;
//     const animationUnitWide = animationAreaWide / 100;

//     return {
//         wideCaseWidth,
//         narrowCaseWidth,
//         caseBackgroundWidth,
//         leftAnimationDot, 
//         rightActiveDotNarrow,
//         rightActiveDotWide,
//         animationAreaNarrow,
//         animationAreaWide,
//         animationUnitNarrow,
//         animationUnitWide,
//     } 
// }

// ===========================================================================
// "use client";

// import {ReactElement, RefObject, useEffect, useRef, useState} from 'react';

// import styles from "./basketBlock.module.css";
// import basketCases from "../../../assets/cases/basket";
// // import BasketCase from '../BasketCase/BasketCase';
// import { IDateForAnimation } from '@/types/case';
// import Link from 'next/link';


// const BasketBlock = (): ReactElement => {

//     const [showCases, setShowCases] = useState<boolean>(false);
//     const [mouseOverSlider, setMouseOverSlider] = useState<boolean>(false);
//     const [sliderScrollPosition, setSliderScrolPosition] = useState<number>(0);
//     // const [slidesIsActive, setSlidesIsActive] = useState<boolean[]>(new Array(basketCases.length).fill(false));
//     const [dataForAnimation, setDataForAnimation] = useState<IDateForAnimation>({
//         casesBlockGap: 0,
//         wideCaseWidth: 0,
//         narrowCaseWidth: 0,
//         caseBackgroundWidth: 0,
//         sliderWrapperWidth: 0,
//         leftAnimationDot: 0, 
//         rightActiveDotNarrow: 0,
//         rightActiveDotWide: 0,
//         animationAreaNarrow: 0,
//         animationAreaWide: 0,
//         animationUnitNarrow: 0,
//         animationUnitWide: 0,
//     } );
//     const sliderRef = useRef<HTMLDivElement>(null);
  
  
    

//     useEffect(() => {
//         // const casesQuantity = Math.ceil((Math.ceil(basketCases.length / 3) + basketCases.length) / 2) + 1;
//         const casesQuantity = basketCases.length + basketCases.length / 3;
//         const root = document.documentElement;
//         root.style.setProperty('--quantity', `${casesQuantity}`);

//         const slider = sliderRef.current;
//         if (!slider) return;

//         const initAnimationData = () => {
//             const animationData = getDataForAnimation(slider);
//             setDataForAnimation(animationData);
//         }

//         initAnimationData();

//         let resizeTimeout: NodeJS.Timeout;
//         function renewAnimationData() {
//             clearTimeout(resizeTimeout);
//             resizeTimeout = setTimeout(() => {
//                 initAnimationData();
//             }, 300);
//         };

//         window.addEventListener("resize", renewAnimationData);

//         const wheelListener = (e: WheelEvent) => handleWheel(e, sliderRef);

//         slider.addEventListener("wheel", wheelListener);

//         function sliderActivityObserver() {
//             if (slider) setSliderScrolPosition(slider.scrollLeft);
//         }

//         slider.addEventListener("scroll", sliderActivityObserver);

//         return (() => {
//             slider.removeEventListener("wheel", wheelListener);
//             slider.removeEventListener("scroll", sliderActivityObserver);
//             window.removeEventListener("resize", renewAnimationData);
//         });   
//     }, [])

//     useEffect(() => {
//         const slider = sliderRef.current;
//         if (!slider) return;
        
//         const sliderChildrens = Array.from(slider.children[0].children);
//         const rootMarginDot = dataForAnimation ? dataForAnimation.leftAnimationDot * 0.5 : 0;
//         console.log(rootMarginDot);
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("active");
//                 } else {
//                     entry.target.classList.remove("active");
//                 }
                
//             });
//         }, {
//             rootMargin: `-${rootMarginDot}px 0px -${rootMarginDot}px 0px`,
//             threshold: 0.5
//         });

//         sliderChildrens.forEach(item => observer.observe(item));

//         return () => observer.disconnect();
//     }, [dataForAnimation.leftAnimationDot])

//     // useEffect(() => {
//     //     console.log(slidesIsActive);
//     // }, [slidesIsActive])

//     const blockDisplay = () => {
//         const slider = sliderRef.current;
//         if (!slider) return;
//         if (!showCases) {
//             // slider.style.scrollBehavior = "";
//             setShowCases(true);
//         } else {
//             // slider.style.scrollBehavior = "smooth";
//             slider.scrollLeft = 0; 
//             setShowCases(false);
//         }
//     }


//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.btn_wrap}>
//                 <button 
//                     className={`btn ${styles.btn}`}
//                     onClick={blockDisplay}
//                 >
//                     {showCases ? "Hide" : "More"}
//                 </button>
//             </div>
//             <div 
//                 className={`${styles.cases_wrap} ${showCases ? styles.show : styles.hide}`}
//                 onMouseEnter={() => setMouseOverSlider(!mouseOverSlider)} 
//                 onMouseLeave={() => setMouseOverSlider(false)}
//                 ref={sliderRef}
//             >
//                 <div
//                     id="cases_block"
//                     className={`${styles.cases_block} ${showCases ? styles.show_block : styles.hide_block}`}
//                 >
//                     {basketCases.map((item, i) => (
//                         <div 
//                             key={item.id} 
//                             data-index={i}
//                             className={`${styles.item} ${i % 3 === 0 ? styles.wide : styles.square}`}
//                             style={{
//                                 backgroundImage: `url(${item.url})`,
                                
//                             }}
//                         >
//                             <Link 
//                                 className={styles.link} 
//                                 href={item.link}
//                                 target="_blank" 
//                             />
//                             {/* <BasketCase 
//                                 basketCase={item} 
//                                 // wrapperActivity={sliderScrollPosition} 
//                                 // dataForAnim={dataForAnimation}
//                                 // wide={i % 3 === 0 ? true : false} 
//                             /> */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
            
//         </div>
//     );
// }

// export default BasketBlock;


// function handleWheel (e: WheelEvent, block: RefObject<HTMLDivElement | null>) {
//     if (!block.current) return;
//     e.preventDefault();
//     block.current.scrollLeft += e.deltaY;
// }

// function getDataForAnimation(block: HTMLDivElement): IDateForAnimation {
//     const casesBlockGap = parseInt(getComputedStyle(block.children[0]).gap);
//     const wideCaseWidth = block.children[0].children[0].scrollWidth;
//     const narrowCaseWidth = block.children[0].children[1].scrollWidth;
//     const caseBackgroundWidth = narrowCaseWidth * 3 + casesBlockGap * 2;

//     const sliderWrapperWidth = window.innerWidth;
//     const leftAnimationDot = Math.round(sliderWrapperWidth / 2 - caseBackgroundWidth / 2) || 0; 
    
//     const rightActiveDotNarrow = leftAnimationDot + caseBackgroundWidth - narrowCaseWidth;
//     const rightActiveDotWide = leftAnimationDot + caseBackgroundWidth - wideCaseWidth;
//     const animationAreaNarrow = rightActiveDotNarrow - leftAnimationDot;
//     const animationAreaWide = rightActiveDotWide - leftAnimationDot;
//     const animationUnitNarrow = animationAreaNarrow / 100;
//     const animationUnitWide = animationAreaWide / 100;

//     return {
//         casesBlockGap,
//         wideCaseWidth,
//         narrowCaseWidth,
//         caseBackgroundWidth,
//         sliderWrapperWidth,
//         leftAnimationDot, 
//         rightActiveDotNarrow,
//         rightActiveDotWide,
//         animationAreaNarrow,
//         animationAreaWide,
//         animationUnitNarrow,
//         animationUnitWide,
//     } 
// }

