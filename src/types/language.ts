// export type ILang = ReturnType<typeof languages>;

export type IPossibleLanguage = "en" | "ua" | "ru";

export interface ILanguageDOM {
    head: IHeadDOM;
    header: IHeaderDOM;
    aside: IAsideDOM;
    about: IAboutDOM;
    portfolio: IPortfolioDOM;
    footer: IFooterDOM;
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
export interface IHeaderDOM {
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
    descriptionTopMobile: string;
    skillTop1: string;
    skillTop2: string;
    skillTop3: string;
    skillTop4: string;
    descriptionBottom: string;
    descriptionBottomMobile: string;
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
    telNumber: string;
    telForLink: string;
}

export interface IPortfolioDOM {
    title: string;
    subtitle: string;
    note1: string;
    note2: string;
    note2Link: string;
}

export interface IFooterDOM {
    title: string;
    subtitle: string;
    linksTitle: string;
    telLabel: string;
    telNumber: string;
    telForLink: string;
    form: IFooterFormDOM;
}

export interface IFooterFormDOM {
    mainLabel: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    privacyLabel: string;
    privacyLink: string;
    buttonText: string;
    sendSuccess: string;
    sendError: string;
}