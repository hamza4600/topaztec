const OpenGraph = ({ url, image, sitename, title, description }) => (
    <>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={sitename} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
    </>
);

const Twitter = ({ card, site, title, description, image }) => (
    <>
        <meta name="twitter:card" content={card} />
        <meta name="twitter:site" content={site} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
    </>
);

const Apple = ({ title, description, image, url }) => (
    <>
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon" href={image} />
        <meta name="application-name" content={description} />
        <meta name="msapplication-TileColor" content="#F3911E" />
        <meta name="msapplication-TileImage" content={image} />
        <meta name="msapplication-config" content={url} />
    </>
);

const Meta = ({ title, description, image, url, sitename, card, site, keywords }) => (
    <>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Life tech" />
        <meta name="url" content={url} />
        <meta name="sitename" content={sitename} />
        <meta name="keywords" content={keywords} />
        <OpenGraph
            url={url}
            image={image}
            sitename={sitename}
            title={title}
            description={description}
        />
        <Twitter
            card={card}
            site={site}
            title={title}
            description={description}
            image={image}
        />
        <Apple
            title={title}
            description={description}
            image={image}
            url={url}
        />
    </>
);

const SeoCard = ({ title, description, image, url, sitename, card, site, keywords }) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                image={image}
                url={url}
                sitename={sitename}
                card={card}
                site={site}
                keywords={keywords}
            />
        </>
    );
};

export default SeoCard;
