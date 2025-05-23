import { Metadata } from "next";
import languages from "../assets/languages/languages";
import { IPossibleLanguage } from "@/types/language";

// import photoForOG from "../assets/img/main_block/for-seo.png";

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
            url: "../assets/img/main_block/for-seo.png",
            title: head.openGraph.title,
            description: head.openGraph.description,
            images: [
                {
                    url: head.openGraph.url,
                    width: head.openGraph.images[0].width,
                    height: head.openGraph.images[0].height,
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