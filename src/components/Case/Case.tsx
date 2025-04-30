import { ReactElement } from 'react';

import styles from "./case.module.css";
import { ICase } from '@/types/case';
import Link from 'next/link';

const Case = ({item}: {item: ICase}): ReactElement => {
    return (
        <div className={styles.item} style={{backgroundImage: `url(${item.url})`}} >
            <Link className={styles.link} href={item.link} target="_blank" />
        </div>
    );
};

export default Case;

