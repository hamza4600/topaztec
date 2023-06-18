import IndexPage from "@/components/Index-Page";
import SeoCard from "@/components/seo";
import Head from "next/head";

const seo = {
    title: "",
    description:
        "",
    url: "",
    image: "",
    twitter: "",
    sitename: "",
    card: "",
    site: "",

    keywords:
        "web development, E-commerce development, no code develop",
};

export default function Home() {
    return (
        <>
            <Head>
                <title>Topaztec</title>
                {/* <title>{seo.title}</title>
                <SeoCard seo={seo} keywords={seo.keywords} /> */}
            </Head>
                <IndexPage />
        </>
    );
}
