import styled from "styled-components"
import { benifitArray } from "./data";

const Wrapper = styled.section`

    min-height: 100vh;
    background-color: ${({theme}) => theme.benifit.background};
    padding: 5rem 0;

    .inner{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

`;
const PartOneWrapper = styled.div`
    margin-bottom: 5rem;
    position: relative;
    display: flex;
    flex-direction: column;

    .sub-title {
        font-size: 13px;
        color: ${({theme}) => theme.benifit.text};
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 1rem;
    }

    .title {
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 1rem;
        width: 40%;
    }

    p {
        font-size: 13px;
        color: ${({theme}) => theme.benifit.text};
        line-height: 1.8;
        margin-bottom: 1rem;
        width: 40%;
    }

    .img-wrap {
        position: absolute;
        right: 0;
        top: 0;

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }

    .inner {
        width: 31.357rem;
        height: 16.786rem;
        margin-right: 5.714rem;
    }

    @media screen and (max-width: 1024px) {
        .img-wrap {
            position: relative;
            width: 100%;
            height: auto;

            img {
                width: 60%;
            }
        }

        .inner {
            width: 100%;
            height: auto;
            margin-right: 0;
        }

        .title, p {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        .title, p {
            width: 100%;
        }

        .img-wrap {
            img {
                width: 100%;
            }
        }

        .title {
            font-size: 24px;
        }

    }
`;
const PartOne = () =>  (
        <PartOneWrapper>
            <div className="sub-title">BENEFITS OF WORKING WITH US</div>
            <div className="title">Building the best sites for the best brands</div>
            <p>Quality first has always been our approach, and we always make an extra effort toward your product's perfection.</p>
            <div className="img-wrap">
                <div className="inner">
                    <img src="https://itmonks.com/wp-content/themes/it-monks/public/img/working_anim.svg" alt="working_anim" />
                </div>
            </div>
        </PartOneWrapper>
    )

const PartTwoWrapper = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem 0;

    .item {
        padding: 1.2rem;
        border-radius: 0.5rem;
        width: 33%;

        display: flex;
        flex-direction: row;
        gap: 1rem;

    }

    .icon {
        position: relative;
        width: 3.5rem;
        height: 3.5rem;
        border : 1px solid #E5E5E5;
        padding: 0.5rem;

        img {
            width: 2.5rem;
            height: 2.5rem;
            object-fit: contain;
        }
    }

    .desc {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
  
        .title {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 13px;
            color: ${({theme}) => theme.benifit.text};
            line-height: 1.8;
            margin-bottom: 0.5rem;
        }
    }

    @media screen and (max-width: 1024px) {
        .item {
            width: 50%;
        }
    }

    @media screen and (max-width: 768px) {
        gap: 1rem 0;
        
        .item {
            width: 100%;
            padding: 0rem;
        }
    }
`;

const PartTwo = () => {
    return (
        <PartTwoWrapper>
            {
                benifitArray.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="icon">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="desc">
                        <div className="title">{item.title}</div>
                            {item.p1 && <p>{item.p1}</p>}
                            {item.p2 && <p>{item.p2}</p>}
                        </div>
                    </div>
                ))
            }
        </PartTwoWrapper>
    )
}

const ClientBenifit = () => {
    return (    
        <Wrapper>
            <div className="inner">
                <PartOne/>
                <PartTwo/>
            </div>
        </Wrapper>
    )
}

export default ClientBenifit;