import styled from "styled-components";
import banner from '../../assets/prime01.jpeg'
import bannertwo from '../../assets/banner02.jpg'
import bannertree from '../../assets/banner03.jpg'

export const Container = styled.header`
width:100%;
    border:solid;
    background: ${({theme}) => theme.COLOR.green};
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
    display: flex;
    flex-wrap: wrap;
`

export const BannerTwo = styled(BannerContainer)`
    background: url( ${bannertwo} );
    background-size:cover;
    width:20rem;
    height:20rem;

`

export const Logo = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    margin-top:1.5rem;
`

export const Nav = styled.nav`
    width: 100%;
    height:100%;
    box-shadow: 0px 0px 10px ${({theme}) => theme.COLOR.text_color};
    display: flex;
    flex-direction: column;
    align-items:center;
    background: white;
`
export const Section = styled.section`
    display: flex;
    flex-wrap:wrap;
    
   a{
    text-decoration: none;
    color: ${({theme}) => theme.COLOR.text_color};

    >button{
        margin: 1rem 1rem 1em 1rem;
        height:4rem;
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
  display: flex;
  flex-direction:column;
  gap: 1rem;
  width: 100%;
  p, span{
    text-align: center;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-wrap:wrap;
    font-family: 'Comfortaa';
    }
   span{
    
    strong{
        width: 100%;
        margin-left:1px;
        font-size:24px;
        display:flex;
        justify-content: center;
        align-items:center;
        flex-wrap: wrap;
    }
   }
`