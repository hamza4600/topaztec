import styled from "styled-components";
import { projectsArray } from "./data";

const Wrapper = styled.section`
    min-height: 100vh;
    padding: 7rem 0;

    .title {
        text-align: center;
        margin-bottom: 6rem;

        h2 {
            font-size: 34px;
            font-weight: 700;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 4rem 0;

        .title {
            margin-bottom: 3rem;
        }
    }
`;

const CaseStudyWrapper = styled.div`
`;

const CaseStudyItem = styled.div`
    margin-bottom: 2.5rem;

    display: flex;
    flex-direction: ${({ direction }) => direction ? "row" : "row-reverse"};
    justify-content: space-between;
    align-items: center;

    #chil {
        &:first-child {
            width: 43vw;
            position: relative;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .sub-img {
        position: absolute;
        top: 35%;
        right: ${({ direction }) => direction ? "-25rem" : "13rem"};
        width: 37rem;


        .sub-img2 {
            position: relative;
            width: 60%;
            height: 100%;
            overflow: hidden;
            object-fit: cover;
        }

        img {   
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media screen and (max-width: 1250px) {
        .sub-img {
            right: ${({ direction }) => direction ? "-24rem" : "6rem"};
            top: 22%;
        }
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;

        #chil {
            &:first-child {
                width: 100%;
            }
        }

        .sub-img {
            bottom: 0;
            top: unset;
            right: 0;
            width: 100%;
        }

        
        .sub-img2 {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            
            img {
                border 1px solid #fff;
                border-radius: 6px;
                width: 60%;
            }
        }
    }
`;

const TextContainer = styled.div`

    position: relative;
    ${({ direction }) => direction ? "padding-left: 0rem;" : "padding-left: 5rem;"}

    .in {
        display: flex;
        flex-direction: column;
        width: 30rem;

        h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .span {
            font-size: 14px;
            color: #7055DE;
            margin-bottom: 1rem;
        }

        .des {
            font-size: 13px;
            font-weight: 400;
            line-height: 1.5;
            max-width: 55%;
        }

        a {
            margin-top: 1rem;
            font-size: 14px;
            font-weight: 700;
            color: #7055DE;
            text-decoration: none;
            border: 1px solid #7055DE;
            padding 0.5rem 1rem;
            border-radius: 5px;
            width: fit-content;
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: #7055DE;
                color: #fff;
            }
        }
    }

    @media screen and (max-width: 1250px) {
        ${({ direction }) => direction ? "width: 23rem;" : "padding-left: 2rem;"}
    }

    @media screen and (max-width: 1024px) {
        padding-left: 0rem;
        width: 100%;
        margin-top: 2rem;

        .in {
            width: 100%;
            margin: 0 auto;
            padding: 0 1rem;

            .des {
                max-width: 95%;
            }
        }
    }
`;

const Projects = () => (
        <CaseStudyWrapper>
            {
                projectsArray.map((project, index) => (
                    <CaseStudyItem 
                        key={index} 
                        direction={index % 2 === 0 ? true : false}
                    >
                        <div id="chil">
                            <img src={project.img2} alt={project.title} />
                            <div className="sub-img">
                                <div className="sub-img2">
                                    <img src={project.img1} alt={project.title} />
                                </div>
                            </div>
                        </div>
                        <TextContainer id="chil"
                            direction={index % 2 === 0 ? true : false}
                        >
                            <div className="in">
                                <h3>{project.title}</h3>
                                <p className="span">{project.span}</p>
                                <p className="des">{project.des}</p>
                                <a href={project.url} target="_blank" rel="noreferrer">View Project</a>
                            </div>
                        </TextContainer>
                    </CaseStudyItem>
                ))
            }
        </CaseStudyWrapper>
    )

const CaseStudy = () =>(
        <Wrapper
            id="portfolio"
        >
            <div className="title">
                <h1>Our Projects</h1>
            </div>
            <Projects />
        </Wrapper>
    )

export default CaseStudy;