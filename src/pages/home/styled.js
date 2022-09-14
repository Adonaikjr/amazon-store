import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
width:100%;
`
export const Article = styled.article`
display: flex;
justify-content: space-evenly;
width: 100%;
flex-wrap: wrap;
//border:solid;
gap: 5rem;
`

export const DiscountDay = styled.div`

 //   border: solid;
`

export const JustifyContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;



`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  h1{
    font-family: 'Comfortaa', cursive;
    margin: 5rem;
  }
`