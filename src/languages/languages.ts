import { IDOM, IPossibleLanguage } from "@/types/language";
import { en } from "./en";
import { ua } from "./ua";
import { ru } from "./ru";

const languages = (langId: IPossibleLanguage): IDOM => {

    if (langId === "ua") return ua;
    if (langId === "ru") return ru;
    return en;
}

export default languages;

