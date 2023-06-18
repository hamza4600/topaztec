import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;
    padding: 7.143rem 0 2.571rem;
    background-color: ${(props) => props.theme.footer};

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0 0.5rem;
    }

`;

export const SectionOne = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 4rem;

    .col {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
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

    @media screen and (max-width: 1250px) {

        .imgwrap h1 {
            font-size: 1.5rem;
            margin-top: 1.6rem;
        }

        .imgwrap img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        
        margin-top: 4.6rem;
        padding: 0 1rem;

        .col {
            flex-direction: column;
        }
        
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