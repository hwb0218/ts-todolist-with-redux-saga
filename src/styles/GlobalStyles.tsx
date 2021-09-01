import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    * {
        box-sizing: border-box;
    }

    body {
        background: #e2e2e2;
    }

    @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
        font-family: 'roboto';
        src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    body{
        font-family: 'NanumSquareRound', sans-serif;
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
    }
`;

export default GlobalStyles;
