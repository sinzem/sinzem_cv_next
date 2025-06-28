import { ICase/* , IDateForAnimation  */} from '@/types/case';
import { ReactElement/* , useEffect, useRef, useState */ } from 'react';

import styles from "./basketCase.module.css";
import Link from 'next/link';

const BasketCase = ({
    basketCase,
    // wrapperActivity,
    // dataForAnim,
    // wide,
}: {
    basketCase: ICase;
    // wrapperActivity: number;
    // dataForAnim: IDateForAnimation;
    // wide: boolean;
}): ReactElement => {

    

    // const [backroundPosition, setBackgroundPosition] = useState<number>(0);
    // const caseRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const rightDot = wide ? dataForAnim.caseBackgroundWidth - dataForAnim.wideCaseWidth : dataForAnim.caseBackgroundWidth - dataForAnim.narrowCaseWidth;
    //     setBackgroundPosition(rightDot);
    // }, [dataForAnim.caseBackgroundWidth]);

    // useEffect(() => {
       
    //     if (caseRef.current?.parentElement?.classList.contains("active")) {
    //         const blockPosition = caseRef.current.getBoundingClientRect().left;
    //         const workToLeft = dataForAnim.leftAnimationDot - blockPosition;
    //         const workUnit = wide ? dataForAnim.animationUnitWide : dataForAnim.animationUnitNarrow;
    //         const percentToLeft = workToLeft / workUnit;
    //         const rightActiveDot = wide ? dataForAnim.rightActiveDotWide : dataForAnim.rightActiveDotNarrow;
                
    //         if (blockPosition > dataForAnim.leftAnimationDot && blockPosition < rightActiveDot) {
    //             setBackgroundPosition(-percentToLeft * workUnit);
    //         } else {
    //             const maxPos = blockPosition <= dataForAnim.rightActiveDotWide ? 0 : 100;
    //             setBackgroundPosition(maxPos * workUnit);
    //         }
    
    //     }

    // }, [wrapperActivity])

    return (
        <div 
            className={styles.wrapper} 
            // ref={caseRef}
        >
            <Link 
                // style={{
                //     backgroundImage: `url(${basketCase.url})`,
                    // width: `${dataForAnim.caseBackgroundWidth}px`,
                    // transform: `translateX(${-backroundPosition}px)`
                // }}
                className={styles.link} 
                href={basketCase.link}
                target="_blank" 
            />
        </div>
    );
};

export default BasketCase;