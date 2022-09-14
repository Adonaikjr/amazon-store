import styled from "styled-components";

export const ButtonContainer = styled.button`
cursor: pointer;
border: none;

background: ${ ({theme}) => theme.COLOR.white };
border-radius: 8px;
:hover{
    transition: 0.5s;
    background: ${ ({theme}) => theme.COLOR.light_green };    

}

`