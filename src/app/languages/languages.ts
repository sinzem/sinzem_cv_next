import { ILangObject, IPossibleLanguage } from "@/types/language";
import { en } from "./en";
import { ua } from "./ua";
import { ru } from "./ru";

const languages = (langId: IPossibleLanguage): ILangObject => {

    if (langId === "ua") return ua;
    if (langId === "ru") return ru;
    return en;
}

export default languages;

