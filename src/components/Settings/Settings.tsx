"use client";

import { ReactElement, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "./settings.module.css";

import SettingsIcon from "../../assets/icons/head/settings.png";
import ThemesIcon from "../../assets/icons/head/brightness.png";


const Settings = (): ReactElement => {

    const [navigationActive, setNavigationActive] = useState<boolean>(false);
    const [langActive, setLangActive] = useState<boolean>(false);

    const pathname = usePathname();
 
    const changeRoot = (): void => {
        const root = document.querySelector(":root");
        if (!root?.classList.contains("dark")) {
            root?.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root?.classList.remove("dark");
            localStorage.removeItem("theme");
        }
    }

   
    return (
        <div 
            className={`
                ${styles.navigation} 
                ${navigationActive ? styles.nav_active : styles.nav_inactive}
            `} 
            onMouseOver={() => setNavigationActive(true)} 
            onMouseOut={() => setNavigationActive(false)}
        >
            <div className={styles.settings}>
                <Image 
                    className={styles.settings_icon} 
                    src={SettingsIcon} 
                    width={32}
                    height={32}
                    alt="settings" 
                />
                <div 
                    className={`
                        ${styles.item} 
                        ${styles.theme} 
                        ${navigationActive ? styles.item_active : styles.item_inactive}
                    `} 
                    onClick={changeRoot}
                >
                    <Image 
                        className={styles.theme_icon} 
                        src={ThemesIcon} 
                        width={32}
                        height={32}
                        alt="theme" 
                    />
                </div>
                <div className={`
                    ${styles.item} 
                    ${styles.lang} 
                    ${navigationActive 
                        ? styles.item_active 
                        : styles.item_inactive}
                `}>
                    <div className={styles.lang_change}
                        onMouseOver={() => setLangActive(true)} 
                        onMouseOut={() => setLangActive(false)}
                    >
                        <div className={styles.lang_icon}>
                            Lang
                        </div>
                        <div className={styles.lang_wrapper}>
                            <div className={`
                                ${styles.divider} 
                                ${styles.divider_top} 
                                ${langActive ? styles.divider_top_active : ""}
                            `}>
                                <div></div>
                            </div>
                            <div className={`
                                ${styles.divider} 
                                ${styles.divider_bottom} 
                                ${langActive ? styles.divider_bottom_active : ""}
                            `}>
                                <div></div>
                            </div>
                            <div 
                                className={`
                                    ${styles.lang_item} 
                                    ${styles.lang_item_top} 
                                    ${langActive ? styles.top_active : styles.top_inactive}
                                `}>
                                {(pathname === "/" || pathname === "/ru") &&
                                    <Link className={styles.lang_link} href="/ua">UA</Link>
                                }
                                {pathname === "/ua" &&
                                    <Link className={styles.lang_link}  href="/">EN</Link>
                                }
                            </div>
                            <div className={`
                                ${styles.lang_item} 
                                ${styles.lang_item_bottom} 
                                ${langActive ? styles.bottom_active : styles.bottom_inactive}
                            `}>
                                {(pathname === "/" || pathname === "/ua") &&
                                    <Link className={styles.lang_link}  href="/ru">RU</Link>
                                }
                                {pathname === "/ru" &&
                                    <Link className={styles.lang_link}  href="/">EN</Link>
                                }
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Settings;