import { Metadata } from "next";
import languages from "../../assets/languages/languages";
import styles from "../styles/page.module.css";

import metadataGenerate from "../../libs/metadataGenerate";
import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import Cases from "@/components/Cases/Cases";
import Footer from "@/components/Footer/Footer";
import { JSX } from "react";

export const metadata: Metadata = metadataGenerate("ru");

export default async function HomeRu(): Promise<JSX.Element> {

  const lang = languages("ru");

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