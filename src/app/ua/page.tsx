import { Metadata } from "next";
import languages from "../../languages/languages";
import styles from "../styles/page.module.css";

import metadataGenerate from "../../libs/metadataGenerate";
import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";

export const metadata: Metadata = metadataGenerate("ua");

export default async function HomeUa() {

  const lang = languages("ua");

  return (
    <div className={styles.page}>
      <Aside aside={lang.aside} />
      <Header header={lang.header}/>
    </div>
  );
}