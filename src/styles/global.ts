import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    span, p, h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.font.family}
    }
 
    html, body {
        overflow: auto;
    }
`;

export default GlobalStyles;
