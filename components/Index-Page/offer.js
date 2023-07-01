import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    margin-top: 2rem;
    font-weight: 700;
    font-size: 16px;

    span {
        margin-left: 0.5rem;
        color: #7055DE;
        background-color: #F5F6F9;
        padding: 0.5rem 1rem;
    }


`;

// compoanet that type text and delete it and type again
const TypeWriter = ({ text }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        // if index is equal to text length then start again
        if (index === text.length) {
            // start again
            setIndex(0);
            return;
        }

        if (
            subIndex === text[index].length + 1 &&
            index !== text.length - 1 &&
            !reverse
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === text[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, text, reverse]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <>
            <span>
                {`${text[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </span>
        </>
    );
};

const WeOffer = () => {
    return (
        <Wrapper>
            <div>
                We Offer :
                <TypeWriter
                    text={[
                        "Web Development",
                        "Mobile Development",
                        "UI/UX Design",
                        "Graphic Design",
                        "SEO",
                        "Digital Marketing",
                        "Content Writing",
                        "Research & Analysis",
                        "Reliable Support",
                        "Best Experience",
                        "And More..."
                    ]}
                />
            </div>
        </Wrapper>
    );
};

export default WeOffer;
