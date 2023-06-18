import styled from "styled-components";

export const Nav = styled.nav`
    padding: 0 4rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    transition: all 0.5s ease-in-out;

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

    @media screen and (max-width: 768px) {
        padding: 0 16px;
        #first {
            height: 70px;
            margin-top: ${({ open }) => (open ? "0px" : "28px")};

            img {
                width: 108px;
            }
        }
    }
`;
export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    list-style: none;
    transition: all 0.5s ease-in-out;

    a {
        margin: 0 1rem;
        font-size: 16px;
        font-weight: 500;
        color: ${({ carrer }) => (carrer ? "#fff" : "#000" )};
        transition: all 0.15s ease-in-out;
        cursor: pointer;
        text-transform: capitalize;
        text-decoration: none;

        &:hover {
            color: #f3911e;
        }
    }

    #button {
        padding: 8px 16px;
        border-radius: 5px;
        background-color: #f3911e;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.15s ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: #f3911e;
            color: #fff;
        }

    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileNav = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.5s ease-in;

    a {
        margin-bottom: 23px;
        font-size: 30px;
        font-weight: 500;
        color: white;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;

        &:hover {
            color: #f3911e;
        }
        // also on click
        &:focus {
            color: #f3911e;
        }
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
`;

export const MobileNavHeader = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    margin-top: 28px;

    .no-outline {
        outline: none;

        &:focus {
            outline: none;
        }
    }
`;
