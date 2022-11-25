import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.snow};
        font-size: ${({ theme }) => theme.fonts.md};
    }

    button {
        cursor: pointer;
    }
`