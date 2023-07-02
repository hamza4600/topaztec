// all main colors of app
import { createGlobalStyle } from "styled-components";

const lightTheme = {
    font: "Poppins, sans-serif",
    body: '#fff',
    text: '#000',
    footer : '#fff',
    nav : {
        background: '#fff',
        color: '#000',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        icon : '#000',
    },
    secOne : {
        p : '#666',
    },
    clutch : "#F5F6F9",
    doCard : {
        background : "linear-gradient(180deg, #f5f6f9 0%, #ffffff 100%)",
        color : "#666",
        boxShadow : "0px 4px 20px rgba(0, 0, 0, 0.25)"
    },
    workCard : {
        background : "#fff",
    },
    benifit : {
        background : "#F5F6F9",
        text : "#666",
        inputs : "#fff",
    },
    footer : {
        background : "#fff",
        text : "#000",
    }

}

const darkTheme = {
    font: "Poppins, sans-serif",
    body: '#1F1E1E',
    text: '#FAFAFA',
    footer : '#fff',
    nav : {
        background: '#1F1E1E',
        color: '#FAFAFA',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        icon : '#7055DE',
    },
    secOne : {
        p : '#fff',
    },
    clutch : "#3A3A3A",
    doCard : {
        background : "linear-gradient(180deg, #3A3A3A 0%, rgba(58, 58, 58, 0.5) 100%)",
        color : "#fff",
        boxShadow : "0px 4px 20px rgba(0, 0, 0, 0.25)"
    },
    workCard : {
        background : "#1F1E1E",
    },
    benifit : {
        background : "#3A3A3A",
        text : "#fff",
        inputs : "transparent",
    },
    footer : {
        background : "#1F1E1E",
        text : "#fff",
    }

}

export const themes = {
    light: lightTheme,
    dark: darkTheme,
}


export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        // transition: all 0.50s linear;
        font-family: ${(props) => props.theme.font};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;

    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    main {
        min-height: 90vh;
        padding-top: 120px;
    }

    .page-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .theme-button {
        position: fixed;
        right: 20px;
        bottom: 50%;
        z-index: 100;
        background-color: transparent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.50s linear;
    }

    @media screen and (max-width: 768px) {
        main {
            overflow-x : hidden ;
        }

        .theme-button {
            top: 20px;
            bottom: auto;
            right: 80px;
        }
    }
`;