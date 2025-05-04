import { ReactElement } from "react";

import styles from "./footer.module.css";
import { IFooterDOM } from "@/types/language";
import FooterForm from "./FooterForm/FooterForm";

import TelegramIcon from "../../assets/icons/social/tg";
import FacebookIcon from "../../assets/icons/social/fb";
import InstagramIcon from "../../assets/icons/social/ig";
import Link from "next/link";

const Footer = ({footer}: {footer: IFooterDOM}): ReactElement => {
    return (
        <div id="footer" className={styles.footer}>
            <div className={styles.wrapper}>
                <h2 className={`subtitle subtitle_main ${styles.title}`}>{footer.title}</h2>
                <h3 className={`title ${styles.title}`}>{footer.subtitle}</h3>
                <div className={"divider"}></div>
                <div className={`subtitle ${styles.text}`}>{footer.linksTitle}</div>
                <div className={styles.social}>
                    <Link href="https://t.me/sinzem83" className={styles.link} >
                        <TelegramIcon />
                    </Link>
                    <Link href="https://www.facebook.com/sinzem/" className={styles.link} >
                        <FacebookIcon />
                    </Link>
                    <Link href="https://www.instagram.com/sinzem83/" className={styles.link} >
                        <InstagramIcon />
                    </Link>
                </div>
                <div className={`subtitle ${styles.tel}`}>
                    {footer.telLabel}
                    <a href={footer.telForLink}>{footer.telNumber}</a>
                </div>
                <div className={`subtitle ${styles.text}`}>{footer.form.mainLabel}</div>
                <FooterForm footerForm={footer.form} />
            </div>
        </div>
    );
};

export default Footer;