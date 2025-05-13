import { ICase } from '@/types/case';
import { ReactElement } from 'react';

import styles from "./basketCase.module.css";
import Link from 'next/link';

const BasketCase = ({
    basketCase,
}: {
    basketCase: ICase; 
}): ReactElement => {
    return (
        <div 
            className={styles.wrapper} 
            style={{backgroundImage: `url(${basketCase.url})`}}
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