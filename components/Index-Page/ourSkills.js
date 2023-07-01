import styled from "styled-components";
import { skillData } from "./data";

const SkillWrapper = styled.section`
    min-height: 40vh;
    padding: 0 4rem;
    max-width: 100%;
    padding-top: 5rem;
    // pointer-events: none;

    @media screen and (max-width: 768px) {
        
        padding-top: 3rem;
        padding : 0 1rem;
    }
`;

const HeadWrapper = styled.div`
    position: relative;
    margin-bottom: 3rem;
    margin-top: 3rem;
    max-width: 100%;

    h5 {
        margin-bottom: 1rem;
        font-size: 14px;
        font-weight: 700;
        color: #666666;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
    @media screen and (max-width: 768px) {
        h2 {
            font-size : 24px;
        }
    }
`;

const ImaeWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -2rem;

    img {
        width: 80%;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        position : relative;
        margin-top : 1.5rem;
    }
`;

const DesWraper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.8rem;
    margin-top: 8rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 0rem;
        gap : 2rem;
        margin-bottom : 2.2rem;
    }
`;

const CardWrapper = styled.div`
    h3 {
        font-size: 16px;
        font-weight: 700;
        padding-bottom: 24px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 1.8;
    }
`;
const Crad = ({ title, description }) => {
    return (
        <CardWrapper
            data-aos="fade-up"
            data-aos-duration="1000"
            aria-label="card"
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </CardWrapper>
    );
};

const HeaderDescription = () => {
    return (
        <DesWraper>
            {skillData.map((item) => {
                return (
                    <Crad
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                );
            })}
        </DesWraper>
    );
};

const HeadingImage = () => {
    return (
        <>
            <HeadWrapper>
                <h5>WE CAN SOLVE YOUR PROBLEMS</h5>
                <h2>A WordPress development agency.</h2>
                <ImaeWrapper>
                    <img
                        src={
                            "https://itmonks.com/wp-content/themes/it-monks/public/img/about_agency.svg"
                        }
                        alt="topz"
                    />
                </ImaeWrapper>
            </HeadWrapper>
        </>
    );
};
const OurSkills = () => {
    return (
        <>
            <SkillWrapper>
                <HeadingImage />
                <HeaderDescription />
            </SkillWrapper>
        </>
    );
};

export default OurSkills;
