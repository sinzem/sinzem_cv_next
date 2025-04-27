import { ReactElement } from "react";

import styles from "./header.module.css";
import { IHeaderDOM } from "@/types/language";
import Image from "next/image";
import mainPhoto from "../../assets/img/main_block/head_3.png"

const Header = ({header}: {header: IHeaderDOM}): ReactElement => {

    return (
        <div className={styles.header}>
            <Image className={styles.main_photo} src={mainPhoto} alt="my-photo" />
            <div className={styles.wrapper}>
                <h1 className={`subtitle ${styles.subtitle}`}>{header.title}</h1>
                <h2 className={`title ${styles.title}`}>{header.subtitle}</h2>
                <div className={styles.buttons}>
                    <button>
                        <a href="#cases" className={`btn ${styles.btn}`}>{header.leftBtn}</a>
                    </button>
                    <button>
                        <a href="#footer" className={`btn ${styles.btn}`}>{header.rightBtn}</a>
                    </button>
                </div>
            </div>
            <a className={styles.freelancehunt} href="https://freelancehunt.com/freelancer/sergzerg3.html?from=shield&r=ZyYyv" target="_blank">
                <img src="https://freelancehunt.com/shields/display/id/1596070/type/rating?style=plastic&amp;lang=uk&amp;showName=1" alt="Freelancehunt — простий та чесний фриланс" />
            </a> 
            <div className={"divider_component"}></div>
        </div>
    );
};

export default Header;