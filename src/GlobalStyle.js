import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
    body{
        background: ${({theme}) => theme.COLOR.green};
        color: ${({theme}) => theme.COLOR.WHITE};
        


    }
`