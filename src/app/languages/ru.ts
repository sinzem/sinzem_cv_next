import { ILangObject } from "../../types/language";

export const ru: ILangObject = {
    head: {
        canonical: "https://sinzem.github.io",
        title: "Резюме разработчика",
        description: "Резюме на позицию Front-end разработчика",
        keywords: "Резюме, Front-end разработчик, Харьков, JavaScript, React",
        openGraph: {
            type: 'website',
            url: 'http://sinzem.github.io',
            title: 'Резюме',
            description: 'Резюме на позицию Front-end разработчика',
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
        title: "Меня зовут Сергей Иноземцев",
        subtitle: "Я Front-end разработчик из города Харьков",
        leftBtn: "Портфолио",
        rightBtn: "Контакты",
    }
}