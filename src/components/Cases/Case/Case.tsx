import { memo } from 'react';
import Link from 'next/link';

import { ICase } from '@/types/case';

import styles from "./case.module.css";


const Case = memo(function Case({project}: {project: ICase}) {

    return (
        
        <>
            <div className={styles.item_internal} style={{backgroundImage: `url(${project.url})`}} >
                <Link className={styles.link} href={project.link} target="_blank" />
            </div>
        </>
        
    );
});

export default Case;

