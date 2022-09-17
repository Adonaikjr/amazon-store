import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding:0 auto;

`
export const Article = styled.article`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
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