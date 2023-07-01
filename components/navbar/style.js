import styled from "styled-components";

export const Nav = styled.nav`
    padding: 0 4rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: ${({ theme }) => theme.nav.background};
    color: ${({ theme }) => theme.nav.color} !important;
    box-shadow: ${({ theme }) => theme.nav.boxShadow};
    
    transition: all 0.1s ease-in-out;

    svg {
        color: ${({ theme }) => theme.nav.icon} !important;

    }

    #first {
        position: relative;
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    
    @media screen and (min-width: 1400px) {
        #inner {
            max-width: 1200px;
            margin: 0 auto;
        }
    }

    .cursor {
        cursor: pointer;
    }

    .active {
        color: #f3911e;
    }

    .img-wrap {
        width: 100px; 
        height: 90px;

        img {
            width : 100%;
            height: 100%;
            object-fit : contain;
        }
    }
    @media screen and (max-width: 768px) {
        padding: 0 16px;
        #first {
            height: 70px;
            // margin-top: ${({ open }) => (open ? "0px" : "24px")};

            img {
                width: 108px;
            }
        }

        .img-wrap {
            height: 60px;
        }

    }
`;
export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    list-style: none;

    a {
        margin: 0 1rem;
        font-size: 16px;
        font-weight: 500;
        // color: ${({ carrer }) => (carrer ? "#fff" : "#000" )};
        color: inherit;
        cursor: pointer;
        text-transform: capitalize;
        text-decoration: none;

        &:hover {
            color: #7055DE;
        }
    }

    #button {
        padding: 8px 16px;
        border-radius: 5px;
        background-color: #7055DE;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            background-color: #7055DE;
            color: #fff;
        }

    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileNav = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #7055DE;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.5s ease-in;

    a {
        margin-bottom: 28px;
        font-size: 30px;
        font-weight: 700;
        color: white;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
    }

    hr {
        color: white;
        padding: 0 5rem;
        margin: 0 auto;
        margin-left: 16px;
        margin-right: 16px;
        width: -webkit-fill-available;
        margin-bottom: 5rem;
    }

    svg {
        color: white !important;
    }
`;

export const MobileNavHeader = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    margin-top: 18px;
    margin-bottom: 28px;

    .no-outline {
        outline: none;

        &:focus {
            outline: none;
        }
    }

    .img-wrap {
        
        height: 60px;

        img {
            width: 108px;
            object-fit: contain;
        }
    }

`;
