// export type ILang = ReturnType<typeof languages>;

export type IPossibleLanguage = "en" | "ua" | "ru";

export interface ILangObject {
    head: {
        canonical: string;
        title: string;
        description: string;
        keywords: string;
        openGraph: IOG,
        other: {
            google: string;
        }
    },
    main: {
        title: string;
        subtitle: string;
        leftBtn: string;
        rightBtn: string;
    }
}

export interface IOG {
    type: string;
    url: string;
    title: string;
    description: string;
    images: IOGImages[];
}

export interface IOGImages {
    url: string,
    width: number,
    height: number,
    alt: string
}