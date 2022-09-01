import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    background-color:  ${({theme}) => theme.COLOR.light_green};
    color:${({theme}) => theme.COLOR.light_green};
    margin-bottom: 8px;
    border-radius: 10px;
    svg{
        margin-left: 10px;
        margin-right: 10px;
    }
    >input{
        height: 56px;
        width: 100%;
        background: transparent;
        border: 0;
        &placeholder{
            color:${({theme}) => theme.COLOR.light_green};
        }
    }
`