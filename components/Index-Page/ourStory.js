import styled from "styled-components";

const Wrapper = styled.section`

    padding: 5rem 0;
    background-color: ${({theme}) => theme.benifit.background};

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        // children have 50% width
        & > * {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 0;

        .container {
            flex-direction: column;

            & > * {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
    }
`;
const TextWrapper = styled.div`
    padding: 1rem;

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

    p {
        line-height: 1.8;
        font-size: 13px;
        font-weight: 400;
        color: ${({theme}) => theme.benifit.text};
        margin-bottom: 1rem;
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        padding: 0rem;
    
        .title {
            font-size: 1.5rem;
        }

        p {
            width: 100%;
        }
    }


`;
const  TextContainer = () => {
    return (
        <TextWrapper>
                <div className="sub-title">Our story</div>
                <div className="title">Who are we ?</div>
                <p>We are Experts who love WordPress and its community. We moved WordPress to the next level by creating incredible solutions using just WordPress and our experience and creativity.</p>
                <p>Being in the industry for 14 years, we can take on any WordPress-related project and deliver solutions to a very high standard.</p>
                <p>Is WordPress right for you? We built fantastic tools with WordPress. Get a free consultation and decide what technologies are right for you!</p>
        </TextWrapper>
    )
}

const ImageWrapper = styled.div`
    padding: 1rem;

    .img-wrap {
        width: 80%;
        height: 100%;
    }

    img {
        width: 100%;
        height: auto;
    }
    
    @media screen and (max-width: 768px) {
        padding: 0rem;

        .img-wrap {
            width: 100%;
        }
    }
`;
const  ImageContainer = () => {
    return (
        <ImageWrapper>
            <div className="img-wrap">
                <img src = "https://itmonks.com/wp-content/themes/it-monks/public/img/development-process.svg" alt="app development process" />
            </div>
        </ImageWrapper>
    )
}

const OurStory = () => (
        <Wrapper>
            <div className="container">
                <TextContainer />
                <ImageContainer />
            </div>
        </Wrapper>
    )

export default OurStory;