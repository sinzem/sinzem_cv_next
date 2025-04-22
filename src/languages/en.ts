import { IDOM } from "../types/language";

export const en: IDOM = {
    head: {
        canonical: "https://sinzem.github.io",
        title: "Curriculum vitae",
        description: "Resume for front-end developer position",
        keywords: "Resume, Curriculum vitae, Front-end developer, Kharkiv, JavaScript, React",
        openGraph: {
            type: "website",
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
        title: "My name is Sergiy Inozemtsev",
        subtitle: "I am a Front-end developer from Kharkiv",
        leftBtn: "Portfolio",
        rightBtn: "Contacts",
    }
}