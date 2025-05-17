import { JSX } from "react";
import { Metadata } from "next";

import languages from "../assets/languages/languages";
import metadataGenerate from "../libs/metadataGenerate";
import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import Cases from "@/components/Cases/Cases";
import Footer from "@/components/Footer/Footer";

import styles from "./styles/page.module.css";


export const metadata: Metadata = metadataGenerate("en");

export default async function Home(): Promise<JSX.Element> {

    const lang = languages("en");

    return (
        <div className={styles.page}>

            <Aside aside={lang.aside} />
            <Header header={lang.header} />
            <Skills skills={lang.about} />
            <Cases cases={lang.portfolio} />
            <Footer footer={lang.footer} />
          
        </div>
    );
}
