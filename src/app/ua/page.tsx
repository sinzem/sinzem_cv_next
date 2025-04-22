import { Metadata } from "next";
import languages from "../../languages/languages";
import styles from "../styles/page.module.css";

import metadataGenerate from "../../libs/metadataGenerate";
import Link from "next/link";

export const metadata: Metadata = metadataGenerate("ua");

export default async function HomeUa() {

  const {main} = languages("ua");

  return (
    <div className={styles.page}>
      <h1>{main.title}</h1>
      <Link href="/">
        <button>En</button>
      </Link>
      <Link href="/ru">
        <button>Ru</button>
      </Link>
    </div>
  );
}