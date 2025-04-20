
import { Metadata } from "next";
import languages from "./languages/languages";
import styles from "./styles/page.module.css";

import metadataGenerate from "../libs/metadataGenerate";

export const metadata: Metadata = metadataGenerate("en");

export default function Home() {

  const {main} = languages("en");

  return (
    <div className={styles.page}>
      <h1>{main.title}</h1>
    </div>
  );
}
