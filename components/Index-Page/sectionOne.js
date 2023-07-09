import styled from "styled-components";

import WeOffer from "./offer";
import img from "../../public/images/svg.png";

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
        img {
            width: 35rem !important;
            height: 21rem !important;
            object-fit: contain;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        margin-top: 2rem;

        img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain;
        }
    }
`;

const TextContainer = styled.div`
    h1 {
        font-size: 41px;
        line-height: 1.4;
    }

    p {
        font-size: 14px;
        line-height: 1.4;
        margin-top: 1rem;
        margin-bottom: 3rem;
        color: ${({ theme }) => theme.secOne.p};
    }

    a {
        font-size: 14px;
        line-height: 1.4;
        padding: 12px 18px;
        border-radius: 5px;
        background-color: #7055de;
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
                        <h1>Leading Software Development Agency</h1>
                        <p>
                            We create powerful websites with stunning visuals
                            that fit your business strategy and customer needs..
                        </p>
                        <a
                            href="https://calendly.com/topaztec/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Schedule a call</a>
                        <WeOffer />
                    </TextContainer>
                    <SvgWrapper>
                        <img src={img.src} alt="svg" />
                    </SvgWrapper>
                </div>
            </SectionOneWrapper>
        </>
    );
};

export default SectionOne;
