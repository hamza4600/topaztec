import styled from "styled-components";
import { doArray } from "./data";
import { useRef, useState } from "react";

const Wrapper = styled.section`
    padding: 7rem 0;

    .inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (max-width: 1020px) {
        .inner {
            flex-direction: column;
        }
    }

    @media (max-width: 768px) {
        padding: 4rem 0;

        .inner {
            padding: 0 0rem;
        }
    }
`;

const LeftWrapper = styled.div`
    width: 33%;
    padding: 1.4rem;

    display: flex;
    flex-direction: column;

    .span {
        font-size: 13px;
        color: ${(props) => props.theme.doCard.color};
        font-weight: 400;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .des {
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 2rem;

        p {
            margin-bottom: 1rem;
            color: ${(props) => props.theme.doCard.color};
            line-height: 1.8;
            font-weight: 300;
        }
    }

    a {
        padding: 1rem 2rem;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid #7055de;
        max-width: fit-content;

        &:hover {
            background-color: #7055de;
            color: #fff;
        }
    }

    @media (max-width: 1020px) {
        width: 100%;
    }
`;

const LeftSide = () => {
    return (
        <LeftWrapper>
            <div className="span">what we do</div>
            <h2>Powerful web solutions</h2>
            <div className="des">
                <p>
                    Having an incredible team with over 15 years of experience
                    in the industry allows us to take on unique WordPress
                    projects with any complexity and create fascinating,
                    high-performing, and visually outstanding solutions.
                </p>
                <p>
                    Our products help clients attract and connect with their
                    target audience and convert them into paying customers.
                </p>
            </div>
            <a
                href="https://calendly.com/topaztec/30min"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn more
            </a>
        </LeftWrapper>
    );
};

const RightWrapper = styled.div`
    padding: 1.4rem;
    width: 66%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .item {
        padding: 1.4rem;
    }

    .inner-item {
        background: ${(props) => props.theme.doCard.background};
        margin-right: 0;
        width: 180px;
        padding: 1.286rem;
        border-radius: 0.857rem;
        margin-bottom: -0.571rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover {
            box-shadow: ${(props) => props.theme.doCard.boxShadow};
        }
    }

    .icon {
        width: 6rem;
    }
    .title {
        font-size: 12px;
        font-weight: 700;
        width: 50%;
        text-align: center;
    }

    @media (max-width: 1180px) {
        .item {
            padding: 1rem;
        }
        .inner-item {
            width: 170px;
            padding: 1rem;
            height: 170px;
        }
    }

    @media (max-width: 1020px) {
        width: 100%;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0;

        // make scrollable
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;

        // when dragging scrollbar
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

        // hide scrollbar
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
            background: transparent;
        }
    }
`;

const RightSide = () => {
    // on drag scroll
    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0,
    });

    const ref = useRef(null);

    const handleMouseDown = (e) => {
        setState({
            ...state,
            isScrolling: true,
            clientX: e.clientX,
            scrollX: ref.current.scrollLeft,
        });
    };

    const handleMouseMove = (e) => {
        const { isScrolling, clientX, scrollX } = state;
        if (isScrolling) {
            const diffX = e.clientX - clientX;
            // ref.current.scrollLeft = scrollX - diffX;
            ref.current.scrollTo({
                left: scrollX - diffX,
                behavior: "smooth",
            });
        }
    };
    return (
        <RightWrapper
            ref={ref}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setState({ ...state, isScrolling: false })}
            onMouseLeave={() => setState({ ...state, isScrolling: false })}
        >
            {doArray.map((item, index) => {
                return (
                    <div className="item" key={index}>
                        <div className="inner-item">
                            <div className="icon">{item.icon}</div>
                            <div className="title">{item.title}</div>
                        </div>
                    </div>
                );
            })}
        </RightWrapper>
    );
};

const WeDo = () => (
    <Wrapper id="services" initial="hidden" animate="show">
        <div className="inner">
            <LeftSide />
            <RightSide />
        </div>
    </Wrapper>
);

export default WeDo;
