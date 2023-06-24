import styled from "styled-components";
import Svg from "./svg";
import img from "../../public/icon/clutch.png";
import OurSkills from "./ourSkills";
import BenifitSection from "./benifits";

const SectionOneWrapper = styled.section`
    padding: 0 4rem;
    max-width: 100%;
    margin-top: 3rem;

    .sec-1 {
        min-height: 40vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        .sec-1 {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
    }

    @media (max-width: 768px) {
        padding: 0 1rem;
        margin-top: 2rem;
    }
`;

const SvgWrapper = styled.div`
    display: flex;
    justify-content: flex-center;
    width: max-content;

    @media (min-width: 1025px) {
        svg {
            width: 35rem !important;
            height: 21rem !important;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        margin-top: 2rem;

        svg {
            width: 100% !important;
            height: 100% !important;
        }
    }
`;

const TextContainer = styled.div`
    h1 {
        font-size: 41px;
        line-height: 1.4;
    }

    p {
        font-size: 18px;
        line-height: 1.4;
        margin-top: 1rem;
        margin-bottom: 3rem;
        color: #666;
    }

    a {
        font-size: 16px;
        line-height: 1.4;
        padding: 1rem 2rem;
        border-radius: 5px;
        background-color: #000;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 32px;
        }
    }
`;

const SectionOne = () => {
    return (
        <>
            <SectionOneWrapper>
                <div className="sec-1">
                    <TextContainer>
                        <h1>IT Monks WordPress Development for Agencies</h1>
                        <p>Free up time and grow your agency.</p>
                        <a>Get Started</a>
                    </TextContainer>
                    <SvgWrapper>
                        <Svg />
                    </SvgWrapper>
                </div>
            </SectionOneWrapper>
        </>
    );
};

const ClutchWrapper = styled.section`
    margin-top: 5rem;
    background-color: #7055de;
    min-height: 12vh;
    user-select: none;

    .inner-clutch {
        padding: 0 4rem;
    }
    .clutch-2 {
        padding: 3rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        background-color: #f5f6f9;

        .clutch-2 {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        padding: 0 1rem;
        margin-top: 2rem;

        .inner-clutch {
            padding: 0 1rem;
        }

        .clutch-2 {
            padding: 1rem 0;
        }

        img {
            width: 80px !important;
            height: 80px !important;
        }
    }
`;

const RewWrapp = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;

    span {
        font-size: 2rem;
        font-weight: 700;
    }

    div {
        margin-top: 1rem;
        text-transform: capitalize;
    }

    @media (max-width: 1024px) {
        color: #000;
    }
`;

const NumberReviews = ({ head, text }) => {
    return (
        <RewWrapp>
            <span>{head}</span>
            <div>{text}</div>
        </RewWrapp>
    );
};

const ClutchReviews = () => {
    return (
        <ClutchWrapper>
            <div className="inner-clutch">
                <div className="clutch-2">
                    <NumberReviews head="500+" text="Project completed" />
                    <NumberReviews head="90%" text="customer retention" />
                    <NumberReviews head="15 + years" text="Building superb websites" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                        }}
                    >
                        <img
                            src={img.src}
                            alt="clutch"
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "contain",
                            }}
                        />
                        <NumberReviews
                            head="5.0 stars"
                            text="Reviews on clutch"
                        />
                    </div>
                </div>
            </div>
        </ClutchWrapper>
    );
};

const IndexPage = () => {
    return (
        <>
            <SectionOne />
            <ClutchReviews />
            <OurSkills />
            <BenifitSection />
        </>
    );
};

export default IndexPage;
