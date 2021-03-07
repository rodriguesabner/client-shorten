import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media(max-width: 768px){
    padding-bottom: 3em;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
  }

  .main {
    display: flex;
    justify-content: center;

    flex-direction: column;
    width: 500px;
    text-align: center;

    @media(max-width: 768px){
      width: 100%;
    }

    h1 {
      margin-bottom: .5em;
    }

    p {
      margin: 0 auto;
      max-width: 400px;

      b {
        color: #4DBFC2;
      }
    }
  }
`

export const CustomImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;

  margin-bottom: 1em;
`

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2em;
  
  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
  }

  input {
    background: #F5F5F5;
    width: 100%;
    outline: 0;
    padding: 13px 20px;
    font-size: 16px;

    ::placeholder {
      font-size: 14px;
      color: #969696;
      font-weight: 500;
    }
  }

  button {
    font-size: 16px;
    font-weight: 600;

    background: #37AFB4;
    color: #fff;
    outline: 0;
    padding: 13px 20px;
    margin-left: 20px;

    cursor: pointer;

    @media(max-width: 768px){
      margin-top: 2em;
    }

    transition-duration: 200ms;

    :hover {
      background: #8bd089;
      color: #fff;
    }
  }
`

export const ShowResult = styled.div`
  width: 100%;
  margin-top: 2em;
  border: 1px solid #EFEFEF;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: .5em;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: #3a6eb6;
      margin-left: 15px;
      cursor: pointer;
    }
  }
`

export const CustomLink = styled.a`
  cursor: pointer;
  color: #37AFB4;
  font-weight: 600;

`
