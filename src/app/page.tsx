
import { Metadata } from "next";
import languages from "../assets/languages/languages";
import styles from "./styles/page.module.css";

import metadataGenerate from "../libs/metadataGenerate";
import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import Cases from "@/components/Cases/Cases";

export const metadata: Metadata = metadataGenerate("en");

export default async function Home() {

  const lang = languages("en");

  return (
    <div className={styles.page}>
      <Aside aside={lang.aside} />
      <Header header={lang.header} />
      <Skills skills={lang.about} />
      <Cases cases={lang.portfolio} />
    </div>
  );
}
