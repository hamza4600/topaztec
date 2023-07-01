import styled from "styled-components";
import img from "../../public/icon/clutch.png";

const ClutchWrapper = styled.section`
    margin-top: 5rem;
    background-color: ${({ theme }) => theme.clutch};

    min-height: 12vh;
    // user-select: none;

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

    span {
        font-size: 2rem;
        font-weight: 700;
    }

    div {
        margin-top: 1rem;
        text-transform: capitalize;
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
                    <NumberReviews
                        head="15 + years"
                        text="Building superb websites"
                    />
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

export default ClutchReviews;
