import { ICase } from '@/types/case';
import { ReactElement } from 'react';

import styles from "./basketCase.module.css";
import Link from 'next/link';

const BasketCase = ({
    basketCase,
    rightPosition,
    backWidth,
}: {
    basketCase: ICase;
    rightPosition: string; 
    backWidth: number;
}): ReactElement => {
    return (
        <div 
            className={styles.wrapper} 
            style={{backgroundImage: `url(${basketCase.url})`, right: rightPosition, width: `${backWidth}px`}}
        >
            <Link 
                className={styles.link} 
                href={basketCase.link}
                target="_blank" 
            />
        </div>
    );
};

export default BasketCase;