import { ReactElement } from "react";
import Link from "next/link";

import styles from "./aside.module.css";
import TelegramIcon from "../../assets/icons/social/tg";
import FacebookIcon from "../../assets/icons/social/fb";
// import InstagramIcon from "../../assets/icons/social/ig";
import Linkedin_from_icons8 from "@/assets/icons/social/ld";

import { IAsideDOM } from "@/types/language";


const Aside = ({aside}: {aside: IAsideDOM}): ReactElement => {
    
    return (
        <aside className={styles.social}>
            <div className={styles.title}>{aside.title}</div>
            <div className={styles.divider}></div>
            <Link href="https://t.me/sinzem83" target="_blank" className={styles.link} >
                <TelegramIcon className={styles.icon} />
            </Link>
            {/* <Link href="https://www.instagram.com/sinzem83/" target="_blank" className={styles.link} >
                <InstagramIcon className={styles.icon} />
            </Link> */}
            <Link href="https://www.linkedin.com/in/sergiy-inosemtsev-29ba42319" target="_blank" className={styles.link} >
                <Linkedin_from_icons8 className={styles.icon} />
            </Link>
            <Link href="https://www.facebook.com/sinzem/" target="_blank" className={styles.link} >
                <FacebookIcon className={styles.icon} />
            </Link>
        </aside>
    );
};

export default Aside;