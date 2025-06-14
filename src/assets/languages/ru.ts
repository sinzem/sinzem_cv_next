import { ILanguageDOM } from "../../types/language";

export const ru: ILanguageDOM = {
    head: {
        canonical: "https://sinzem-cv-next.vercel.app/",
        title: "Резюме разработчика",
        description: "Резюме на позицию Front-end разработчика",
        keywords: "Resume, Curriculum vitae, Front-end developer, Kharkiv, JavaScript, React, резюме, front-end разработчик, Харьков",
        openGraph: {
            type: 'website',
            url: 'https://sinzem-cv-next.vercel.app/',
            title: 'Резюме',
            description: 'Резюме на должность front-end разработчика. JavaScript + React',
            images: [
                {
                    url: "../../assets/img/main_block/for-seo.png",
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
    header: {
        title: "Меня зовут Сергей Иноземцев",
        subtitle: "Я Front-end разработчик из города Харьков",
        leftBtn: "Портфолио",
        rightBtn: "Контакты",
    },
    aside: {
        title: "Социальные сети",
    },
    about: {
        title: "Обо мне",
        hard: {
            title: "Hard skills",
            descriptionTop: "Навыки из этого блока я приобрел во время изучения онлайн-курсов школы Udemy и материалов из Интернета",
            descriptionTopMobile: "Middle Level",
            skillTop1: "HTML",
            skillTop2: "CSS, SCSS",
            skillTop3: "JavaScript, TypeScript",
            skillTop4: "React, Next.js",
            descriptionBottom: "Навыки были получены из разных YouTube-каналов",
            descriptionBottomMobile: "Junior Level",
            skillBottom1: "Node.js",
            skillBottom2: "Nest.js, express",
            skillBottom3: "PostgreSQL, MongoDB",
            skillBottom4: "Gulp, Webpack",
            skillBottom5: "Git",
            skillBottom6: "SEO",
        },
        soft: {
            title: "Soft skills",
            descriptionTop: "Личные качества",
            skillTop1: "Ответственность в работе",
            skillTop2: "Интерес к разработке",
            skillTop3: "Обучаемость",
            skillTop4: "Письменные и устные коммуникативные навыки",
            skillTop5: "Желание работать и зарабатывать деньги",
            descriptionBottom: "Мой английский",
            skillBottom1: "A2/B1",
            skillBottom2: "(продолжаю учить)",
        },
        general: {
            title: "Общая информация",
            skillTop1: "Полный возраст: 41",
            skillTop2: "Номер телефона: ",
            skillTop3: "Место проживания: Харьков",
            skillTop4: "Опыт разработки: 2 года",
            skillTop5: "Участие в коммерческих проектах: 6 месяцев",
            skillBottom1: "Образование: ХНПУ им. Г.С.Сковороды, психология, магистр (по специальности не работал)",
            skillBottom2: "На данный момент все свободное время посвящаю изучению английского языка и IT",
            skillBottom3: "Готов сразу приступить к работе (только удаленно)",
            telNumber: "+38 (093) 410-45-12",
            telForLink: "tel:+380934104512",
        },
    },
    portfolio: {
        title: "Портфолио",
        subtitle: "Мои работы*",
        note1: "*Не все проекты адаптированы под мобильную версию",
        note2: "*Репозитории проектов можно просмотреть на",
        note2Link: "GitHub",
    },
    footer: {
        title: "Мои контакты",
        subtitle: "Свяжитесь со мной",
        linksTitle: "Любым удобным для вас способом :",
        telLabel: "Тел: ",
        telNumber: "+38 (093) 410-45-12",
        telForLink: "tel:+380934104512",
        form: {
            mainLabel: "Или оставьте свои данные и я сам напишу Вам:",
            nameLabel: "Ваше имя:",
            emailLabel: "Ваш E-mail:",
            messageLabel: "Ваше сообщение:",
            privacyLabel: "Я согласен(а) с ",
            privacyLink: "privacy policy",
            buttonText: "Отправить сообщение",
            sendSuccess: "Спасибо! Сообщение успешно отправлено",
            sendUnknownError: "Извините, произошла ошибка... Попробуйте позже",
            sendNameError: "Введите валидное имя",
            sendEmailError: "Введите ввалидный email",
            sendTextError: "Введите ваше сообщение",
            sendPrivacyError: "Нужно согласие на обработку данных",
            resetForm: "Очистить форму",
        }
    },
}