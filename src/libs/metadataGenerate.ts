import { Metadata } from "next";
import languages from "../assets/languages/languages";
import { IPossibleLanguage } from "@/types/language";


const metadataGenerate = (langId: IPossibleLanguage): Metadata => {

    const {head} = languages(langId);

    return {
        alternates: {
            canonical: head.canonical,
        },
        title: head.title,
        description: head.description,
        openGraph: {
            type: "website",
            url: head.openGraph.url,
            title: head.openGraph.title,
            description: head.openGraph.description,
            images: [
                {
                    url: "../assets/img/main_block/for-seo.png",
                    // width: head.openGraph.images[0].width,
                    // height: head.openGraph.images[0].height,
                    // height: "150px",
                    // width: "200px",
                    alt: head.openGraph.url,
                },
            ],
        },
        other: {
            google: head.other.google,
        }
    }
};

export default metadataGenerate;