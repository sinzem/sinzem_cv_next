import { ReactElement } from 'react';
import Link from 'next/link';

import { ICase } from '@/types/case';

import styles from "./case.module.css";


const Case = ({project}: {project: ICase}): ReactElement => {

    return (
        
        <>
            <div className={styles.item_internal} style={{backgroundImage: `url(${project.url})`}} >
                <Link className={styles.link} href={project.link} target="_blank" />
            </div>
        </>
        
    );
};

export default Case;

