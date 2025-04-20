import { ILangObject } from "../../types/language";

export const ua: ILangObject = {
    head: {
        canonical: "https://sinzem.github.io",
        title: "Резюме розробника",
        description: "Резюме на позицію Front-end розробника",
        keywords: "Resume, Curriculum vitae, Front-end developer, Kharkiv, JavaScript, React",
        openGraph: {
            type: 'website',
            url: 'http://sinzem.github.io',
            title: 'Curriculum vitae',
            description: 'Resume for front-end developer position. JavaScript + React',
            images: [
                {
                    url: "../assets/img/main_block/for-seo.png",
                    width: 150,
                    height: 120,
                    alt: 'My photo',
                },
            ],
        },
        other: {
            'google': 'notranslate',
        }
    },
    main: {
        title: "Мене звуть Сергій Іноземцев",
        subtitle: "Я Front-end розробник із міста Харків",
        leftBtn: "Портфоліо",
        rightBtn: "Контакти",
    }
}