import IndexPage from "@/components/Index-Page";
import SeoCard from "@/components/seo";
import Head from "next/head";

const seo = {
    title: "Topaztec - Web Development Agency",
    description: "we are a web development agency that specialises in building websites and web applications for small to medium sized businesses. We also offer a range of other services such as SEO, E-commerce development, no code development and more.",
    url: "https://www.topaztec.co.uk/",
    image: "https://pbs.twimg.com/profile_banners/1339115667845500928/1682933645/600x200",
    twitter: "https://twitter.com/topaztec",
    sitename: "https://www.topaztec.co.uk/",
    card: "https://twitter.com/topaztec",
    site: "https://www.topaztec.co.uk",
    keywords: "web development, E-commerce development, no code develop, IT solutions , web Applications , Mobile Applications"              
};

export default function Home() {

    return (
        <>
            <Head>
                <title>Topaztec</title>
                <SeoCard {...seo} />
            </Head>
            <IndexPage />
           
        </>
    );
}
