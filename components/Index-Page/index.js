import SectionOne from "./sectionOne";
import OurSkills from "./ourSkills";
import BenifitSection from "./benifits";
import ContactSection from "./contact";
import ClutchReviews from "./clutchReviews";
import WeDo from "./weDo";
import WeWorkWith from "./weWork";
import ClientBenifit from "./clientBenifit";

const IndexPage = () => {
    return (
        <>
            <SectionOne />
            <ClutchReviews />
            <WeDo />
            <WeWorkWith />
            <ClientBenifit />
            <OurSkills />
            <BenifitSection />
            <ContactSection />
        </>
    );
};

export default IndexPage;
