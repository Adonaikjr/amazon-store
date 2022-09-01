import styled from "styled-components";
import banner from '../../assets/prime01.jpeg'
import bannertwo from '../../assets/banner02.jpg'
import bannertree from '../../assets/banner03.jpg'

export const Container = styled.header`
    width:100%;
    height:100%;
    background: ${({theme}) => theme.COLOR.green};
    button{
        margin-right: 0.5rem;
    }
`
export const BannerContainer = styled.div`
    //border:solid;
    background-image: url( ${banner} );
    background-repeat: no-repeat;
    background-size: cover;
height:12rem;
width:35rem;
`
export const BannerContent = styled(BannerContainer)`
    background-image: url( ${bannertree} );
`

export const BannerTwo = styled(BannerContainer)`
    background: url( ${bannertwo} );
    background-size:cover;
    width:20rem;
    height:20rem;

`

export const Logo = styled.div`
    //border:solid red;
display: flex;
align-items: center;

`

export const Nav = styled.nav`

    display:flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    font-size: 2rem;
    height:7rem;
    background: white;
    //border:solid;
   
`


export const InputPesquisa = styled.div`
color: ${({theme}) => theme.COLOR.text_color};

input{
width: 40rem;
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

export const MostSales = styled(FeedClient)`
display: flex;
align-items: center;
flex-direction: column;
`
export const Content = styled.div`
    //border:solid;
    display:flex;
    margin-top:1rem;
    justify-content: center;
    align-items:center;
    height:100%;
    gap:0.5rem;
    
`