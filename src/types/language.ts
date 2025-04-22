// export type ILang = ReturnType<typeof languages>;

export type IPossibleLanguage = "en" | "ua" | "ru";

export interface IDOM {
    head: IHeadDOM;
    main: IMainDOM;
    aside: IAsideDOM;
    about: IAboutDOM;
}

export interface IHeadDOM {
    canonical: string;
    title: string;
    description: string;
    keywords: string;
    openGraph: IOGHeadDOM,
    other: {
        google: string;
    }
}
export interface IOGHeadDOM {
    type: string;
    url: string;
    title: string;
    description: string;
    images: IOGImagesDOM[];
}

export interface IOGImagesDOM {
    url: string;
    width: number;
    height: number;
    alt: string;
}
export interface IMainDOM {
    title: string;
    subtitle: string;
    leftBtn: string;
    rightBtn: string;
}

export interface IAsideDOM {
    title: string;
}

export interface IAboutDOM {
    title: string;
    hard: IHardDOM;
    soft: ISoftDOM;
    general: IGeneralDOM;
}

export interface IHardDOM {
    title: string;
    descriptionTop: string;
    skillTop1: string;
    skillTop2: string;
    skillTop3: string;
    skillTop4: string;
    descriptionBottom: string;
    skillBottom1: string;
    skillBottom2: string;
    skillBottom3: string;
    skillBottom4: string;
    skillBottom5: string;
    skillBottom6: string;
}

export interface ISoftDOM {
    title: string;
    descriptionTop: string;
    skillTop1: string;
    skillTop2: string;
    skillTop3: string;
    skillTop4: string;
    skillTop5: string;
    descriptionBottom: string;
    skillBottom1: string;
    skillBottom2: string;
}

export interface IGeneralDOM {
    title: string;
    skillTop1: string;
    skillTop2: string;
    skillTop3: string;
    skillTop4: string;
    skillTop5: string;
    skillBottom1: string;
    skillBottom2: string;
    skillBottom3: string;
}

