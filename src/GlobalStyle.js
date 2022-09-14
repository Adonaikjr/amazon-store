import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        margin: 0 auto;
        padding:0 auto;
        width:100%;
        background: ${({theme}) => theme.COLOR.green};
        color: ${({theme}) => theme.COLOR.WHITE};        
    }
`