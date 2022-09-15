import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    background: ${({theme}) => theme.COLOR.green};
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
    position: relative;
    animation-name: example;
    animation-duration: 1.5s;
        @keyframes example {
            100%   {left:0px; top:0px;}
            0%  { left:200px; top:0px;}
        }



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
        font-size: 1rem;
    }

   }
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
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:24px;
        position: relative;
        animation-name: animationDescont;
        animation-duration: 1.5s;
        @keyframes animationDescont {
            100%{ right:0px; top:0px;}
            0%  { right:200px; top:0px;}
        }
        >svg{
            margin: 0;
        }
    }
   }
`