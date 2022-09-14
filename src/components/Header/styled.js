import styled from "styled-components";
import banner from '../../assets/prime01.jpeg'
import bannertwo from '../../assets/banner02.jpg'
import bannertree from '../../assets/banner03.jpg'

export const Container = styled.header`


    background: ${({theme}) => theme.COLOR.green};
    display:flex;
    flex-direction:column;
    align-items: center;
    flex-wrap:wrap;
    button{
        margin-right: 0.5rem;
    }
    
`
export const BannerContainer = styled.div`
    background-image: url( ${banner} );
    background-repeat: no-repeat;
    background-size: cover;
    width:41rem;
    height:13rem;
    margin-top:1rem;
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
font-family: 'Comfortaa', cursive;
font-weight: 700;
font-size: 2rem;
`

export const Nav = styled.nav`
box-shadow: 0px 0px 10px ${({theme}) => theme.COLOR.text_color};
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height:10rem;
    flex-direction: column;
    background: white;
    //border:solid;
    p, span{
        font-family: 'Comfortaa', cursive;
    }
   span{
    display:flex;
    align-items:center;

    strong{
        margin-left:1px;
        font-size:24px;
        display:flex;
        align-items:center;
    }
   }

`
export const Section = styled.section`
    display:flex;
    flex-wrap: wrap;
    margin-top:1rem;
    width:100%;
    gap:1rem;
   a{ 
    width:100%;
    display:flex;
    justify-content:space-around;
    text-decoration: none;
    color: ${({theme}) => theme.COLOR.text_color};

    >button{
        height:4rem;
        width: 50%;
        padding:1rem;
        box-shadow: 0px 0px 10px ${({theme}) => theme.COLOR.text_color};
    }

   }
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
    display:flex;
    margin-top:2rem;
    justify-content: center;
    align-items:center;
    height:100%;
    gap:0.5rem;
    width:100%;
    
`