import styled from "styled-components";
import { WorkSvg, svgArray } from "./data";

const Wrapper = styled.section`
    max-width: 100%;
    overflow: hidden;

    .inner {
        padding: 6.4rem 2rem 9.2rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 1200px;
            background-color: #e8ebf0;
            height: 1px;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 1024px) {
        .inner {
            padding: 4.4rem 2rem 7.2rem 2rem;

            &::after {
                display: none;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .inner {
            padding: 0.2rem 1rem 5.2rem 1rem;
        }
    }
`;

const PartOneWrapper = styled.div`
    padding: 2.857rem 0;
    display: flex;
    flex-direction: column;
    position: relative;

    div {
        max-width: 600px;
        h2 {
            font-size: 35px;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.5;

            span {
                color: #7055de;
            }
        }
    }

    a {
        margin-top: 0.6rem;
        padding: 12px 26px;
        background-color: #7055de;
        color: #fff;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid #7055de;
        max-width: fit-content;
    }

    .img-wrap {
        margin-bottom: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: auto;
        display: flex;
        width: auto;
        justify-content: flex-end;
        align-items: center;
    }

    @media screen and (max-width: 1024px) {
        div {
            max-width: 100%;
            h2 {
                font-size: 30px;
            }
        }

        .img-wrap {
            position: relative;
            justify-content: center;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 1.4rem 0;
    }
`;

const PartOne = () => {
    return (
        <PartOneWrapper>
            <div>
                <h2>

                    We {"'"} re lucky to work with great people, companies and leading
                    brands <span>in the World</span>
                </h2>
            </div>
            <a href="#">Join Elite</a>
            <div className="img-wrap">
                <WorkSvg />
            </div>
        </PartOneWrapper>
    );
};

const PartTwoWrapper = styled.div`
    margin-top: 6.4rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.8rem;

    .item {
        border: 1px solid #e8ebf0;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 5.143rem;
        padding: 0 1.529rem;
        border-radius: 0.357rem;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 1.429rem;
            height: 60%;
            background-color: ${({ theme }) => theme.workCard.background};
            top: -0.143rem;
            right: -0.143rem;
        }
    }

    @media screen and (max-width: 1024px) {
        margin-top: 4.4rem;
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        margin-top: 3.2rem;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        .item {
            scale: 0.9;
            padding: 0 0.6rem;
        }
    }
`;

const PartTwo = () => (
    <PartTwoWrapper>
        {svgArray.map((item, index) => {
            return (
                <div className="item" key={index}>
                    {item.icon}
                </div>
            );
        })}
    </PartTwoWrapper>
);

const WeWorkWith = () => {
    return (
        <Wrapper>
            <div className="inner">
                <PartOne />
                <PartTwo />
            </div>
        </Wrapper>
    );
};

export default WeWorkWith;
