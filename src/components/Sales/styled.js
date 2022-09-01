import styled from "styled-components";

export const SaleContainer = styled.div`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;

}
box-shadow: 10px 5px 300px yellow;
width:7.7rem;
border-radius:5px;
background: ${({theme}) => theme.COLOR.white};
margin-bottom: 1rem;
iframe{
    width:7.77rem;
    height: 15rem;
    border:transparent;
}
h4{
    margin: 5px;
    font-family: 'Comfortaa', cursive;
}
`

