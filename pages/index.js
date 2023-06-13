// import IndexPage from "@/components/mainPage";
import SeoCard from "@/components/seo";
import Head from "next/head";

const seo = {
    title: "Life tech Applications",
    description:
        "Life tech is a company that makes life better and better we are the best in the world in building and developing applications and websites",
    url: "https://lifetech.com",
    image: "https://life-tech-27d60.web.app/_next/static/media/lifetech.b542e636.svg",
    twitter: "@lifetech",
    sitename: "Life tech",
    card: "summary_large_image",
    site: "@lifetech",

    keywords:
        "Life tech, web development, E-commerce development, no code develop",
};

export default function Home() {
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <SeoCard seo={seo} keywords={seo.keywords} />
            </Head>
            {/* <IndexPage /> */}
        </>
    );
}
