import { createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        font-family: 'DotGothic16', sans-serif;
        
        ::-moz-selection {
        color: #f953c6;
        background: transparent;
    }

        ::selection {
        color: #f953c6;
        background: transparent;
        }
    }
    

`