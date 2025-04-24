"use client";

// import { useEffect } from "react";
import styles from "./settings.module.css";

const Settings = () => {

    // useEffect(() => {
    //     themeFromStorage();    
    // }, [])

    // const themeFromStorage = () => {
    //     const root = document.querySelector(":root");
    //     const ls = localStorage.getItem("theme");
    //     if (ls === "dark") {
    //         root?.classList.add("dark");
    //     }
    // }

    const changeRoot = () => {
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
        <div className={styles.wrapper}>
            <button onClick={changeRoot}>Click me</button>
        </div>
    );
};

export default Settings;