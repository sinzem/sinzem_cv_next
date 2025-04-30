import { ILanguageDOM, IPossibleLanguage } from "../../types/language";
import { en } from "./en";
import { ua } from "./ua";
import { ru } from "./ru";

const languages = (langId: IPossibleLanguage): ILanguageDOM => {

    if (langId === "ua") return ua;
    if (langId === "ru") return ru;
    return en;
}

export default languages;

