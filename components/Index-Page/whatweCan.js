import styled from "styled-components";
import { solutionsArray } from "./data";

const Wrapper = styled.section`
    padding: 5rem 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    @media screen and (max-width: 1024px) {
        padding: 3rem 0;

        .container {
            max-width: 100%;
            padding: 0 2rem;
        }
    }

`;
const PartOneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .sub-title { 
        font-size: 13px;
        font-weight: 600;
        color: ${({theme}) => theme.benifit.text};
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .title {
        font-size: 2rem;
        font-weight: 700;
        color: ${({theme}) => theme.benifit.title};
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }

    .img-wrapp {
        position: absolute;
        right: 0;
        top: 0;

        img {
            width: 80%;
            object-fit: contain;
        }
    }

    @media screen and (max-width: 1024px) {
        .img-wrapp {
            position: relative;
            width: 100%;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }
`;

const PartOne = () => (
    <PartOneWrapper>
        <div className="sub-title">look what we can</div>
        <div className="title">Our Web solutions</div>
        <div className="img-wrapp">
            <img src={"https://itmonks.com/wp-content/themes/it-monks/public/img/solutions.svg"} alt="WordPress" />
        </div>
    </PartOneWrapper>
)

const PartTwoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3rem;

    .item {
        width: 50%;
        padding: 1rem;
    }

    .inline {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1rem;
    
        img {
            width: 80px;
            height: 80px;
            object-fit: contain;
        }

        .title {
            font-size: 21px;
            font-weight: 700;
            margin-left: 1rem;
        }
    }

    p { 
        line-height: 1.8;
        font-size: 13px;
        font-weight: 400;
        color: ${({theme}) => theme.benifit.text};
        margin-bottom: 1rem;
        width: 90%;
    }

    @media screen and (max-width: 1024px) {
        .item {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        margin-top: 1.5rem;
        
        .item {
            padding: 0rem;
        }

        p {
            width: 100%;
        }

        .inline {
            .title {
                font-size: 18px;
            }
        }
    }


`;
const PartTwo = () => (
    <PartTwoWrapper>
        {
            solutionsArray.map((item, index) => (
                <div className="item" key={index}>
                    <div className="inline">
                        <img src={item.src} alt={item.title} />
                        <div className="title">{item.title}</div>
                    </div>
                    <p>{item.desc}</p>
                </div>
            ))
        }
    </PartTwoWrapper>
)

const WhatWeCan = () =>{
    return (
        <Wrapper
            id="solution"
            as="section"
            ae_in="fadeInUp"
            ae_dur="1s"
            ae_delay="0.5s"
        >
            <div className="container">
                <PartOne />
                <PartTwo />
            </div>
        </Wrapper>
    )
}

export default WhatWeCan;