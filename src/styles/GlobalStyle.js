import {createGlobalStyle} from "styled-components";
import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
  
  @media(max-width: 768px){
    height: auto;
  }
`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  html {
    background: var(--primary);
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  ::selection {
    background: #5405BC;
    color: #fff;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  h1, h2, p, span, strong {
    cursor: default;
  }

  :root {
    --primary: #fff;
    --secondary: #000;
  }
`;
