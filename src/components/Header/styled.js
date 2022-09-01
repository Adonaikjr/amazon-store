import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    background: ${({theme}) => theme.COLOR.green};


nav{
    display:flex;
    justify-content: space-around;
    align-items: center;
}


    
`

export const Logo = styled.div`
    //border:solid red;
display: flex;
align-items: center;

`


export const InputPesquisa = styled.div`
color: ${({theme}) => theme.COLOR.text_color};

input{

color: ${({theme}) => theme.COLOR.text_color};
outline: none;
    svg{
        height: 24px;
        width:24px;
        color:black;
    }
}

`
export const FeedClient = styled.h4`
display: flex;
align-items: center;
`

export const MostSales = styled.h4`
display: flex;
align-items: center;
flex-direction: column;
`