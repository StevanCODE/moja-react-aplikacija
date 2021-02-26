import styled from "styled-components"


export const Validiv = styled.div`
    p {
        font-size: 1.3rem;
        font-family: 'DotGothic16', sans-serif;
        background: #659999;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #04ff10, #659999);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #00ff88, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-clip: text;
        -webkit-text-fill-color: ${( {styles} ) => styles == true ? "#ff0000" : "transparent"};
        font-weight: 700;
        

    }
`