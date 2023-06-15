// all main colors of app
import { createGlobalStyle } from "styled-components";

const lightTheme = {
    font: "Poppins, sans-serif",
    body: '#fff',
    text: '#000',
    footer : '#000',

}

const darkTheme = {
    font: "Poppins, sans-serif",
    body: '#363537',
    text: '#FAFAFA',
    footer : '#fff',
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
        transition: all 0.50s linear;
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
    }
`;