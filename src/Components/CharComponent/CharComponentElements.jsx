import styled from "styled-components"


export const CharDiv = styled.div`
    display: inline-block; 
    width: 85px;
    padding: 16px; 
    text-align: center;
    margin: 16px; 
    font-size: 2rem;
    border: 1px solid white;
    cursor: pointer;
    color: #f953c6;
    font-weight: 700;
    margin-top: 3rem;

    :hover {
        transition: all 40s ease-out;
        transform: rotate3d(0, 5, 0, 75rad);
    }
`


export const CharWrap = styled.div`
    width: 70%;
`