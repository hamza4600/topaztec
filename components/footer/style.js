import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;
    background-color: ${(props) => props.theme.footer};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0 0.5rem;
    }

`;

export const ImageWrapper = styled.div`

    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 98%;
        object-fit: contain;
    }

`;

export const SectionOne = styled.div`

    padding-left: 4rem;
    padding-right: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 6rem;
    width: 100%;

    .imgwrap {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }

    .imgwrap h1 {
        font-size: 2rem;
        font-weight: 500;
        color: #fff;
        text-transform: uppercase;
        margin-top: 2.3rem;
        width: 100%;
        text-align: end;
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
    }
    // firsct child of row
    .row > div:first-child {
        margin-left: 2rem !important;
    }
  
    @media screen and (max-width: 1350px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media screen and (max-width: 1250px) {
        
        flex-direction: column;
        padding-left: 16px;
        padding-right: 16px;

        .imgwrap h1 {
            font-size: 1.5rem;
            margin-top: 1.6rem;
        }

        .imgwrap img {
            width: 100%;
            height: 100%;
        }
        .row {
            margin-top: 6rem;
            margin-bottom: 5rem;
        }
    }

    @media screen and (max-width: 768px) {
        
        margin-top: 4.6rem;
        .row {
            width: 100%;            
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
                
            #ftsctwo {
                margin: 0px;
                margin-top: 2rem;
                padding: 0px;
                display: block;

                h1 {
                    margin-bottom: 1rem;
                }
                a {
                    margin : 0px;
                }
            }
        } 
        .row > div:first-child {
            margin-left: 0px !important;
        }

    }
`;


export const SectionTwo = styled.div`
    padding: 0 2rem;
    margin-top: 8rem;
    margin-bottom: 10rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    
    display: ${(props) => props.showMbl ? "none" : "flex"}; 

    > :first-child {
        margin-left: 0px !important;
    } 

    > * {
        margin-left: 2rem;
    }

    h1 {
        width: 330px;
        font-size: 32px;
        font-weight: 500;
        color: #fff;
        
        strong {
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    a {
        color: #F3911E;
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        margin-top: 4rem;
        margin-bottom: 4rem;
        width: 100%;
        flex-direction: column;
        // if showMbl is the show on moblie screen and none is true then display none
        display: ${(props) => props.showMbl ? "flex" : "none"};

        > * {
            margin-left: 1.5rem;
        }


        h1 {
            font-size: 16px;
            width: auto;
        }

        i {
            display: none;
        }
    }
`;

export const ItemList = styled.div`

    margin-left: 80px;

    h2 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        text-transform: uppercase;
        color: #F3911E;
    }

    ul {
        list-style: none;
        margin-top: 1.2rem;
        display: flex;
        flex-direction: column;
        
        a {
            font-size: 16px;
            font-weight: 400;
            color: #fff;   
            cursor: pointer;
            margin-bottom: 0.8rem;
            text-transform: capitalize;
            text-decoration: none;
        }

    }

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
        margin-left: 0px;

        h2 {
            font-size: 16px;
        }

        ul {
            a {
                font-size: 14px;
            }
        }
    }

`; 

export const Icon = () => (
    <>
        <svg
            width="45"
            height="21"
            viewBox="0 0 45 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45 9.97886V10.7582C40.6068 11.7178 37.4172 16.1867 36.1061 20.6261C36.1053 20.6291 35.5656 20.4434 35.5496 20.4379C35.5334 20.4325 35.5674 20.4407 35.5684 20.4374C36.562 17.0412 37.653 13.2792 40.4082 10.8302C33.3765 10.9953 28.5578 11.2579 22.7445 11.2876L22.7431 11.2876C15.9912 11.3222 9.24452 11.3567 0.598427 11.6029L0 11.62V9.07057L40.4082 9.85061C37.653 7.40163 36.5701 3.67701 35.5684 0.243496C35.5684 0.243496 34.9932 0.433365 35.5494 0.244116C36.1057 0.054866 36.1056 0.0546875 36.1056 0.0546875C37.4053 4.5029 40.6061 9.01912 45 9.97886Z"
                fill="white"
            />
        </svg>
    </>
);
