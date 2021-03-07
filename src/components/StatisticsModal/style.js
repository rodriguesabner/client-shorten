import styled from 'styled-components'

export const Layout = styled.div`
  border-radius: 10px;
  width: 600px;
  background: rgba(255, 255, 255, .9);

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    background: rgba(255, 255, 255, 1);
  }
`

export const Container = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;

  svg {
    cursor: pointer;
  }
`

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2em;
  justify-content: center;
`

export const CustomInput = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2em;

  div {
    :nth-child(1) {
      width: 100%;
    }
  }

  p {
    margin-bottom: .5em;
    color: #999;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
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

    transition-duration: 200ms;

    :hover {
      background: #8bd089;
      color: #fff;
    }
  }
`

export const ResultContainer = styled.div`
  margin-top: 2em;
  border: 1px solid #FAFAFA;
  padding: 1em;

  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    :nth-child(2) {
      border-top: 1px solid rgba(0, 0, 0, .2);
      margin-top: 1em;
      padding-top: 1em;
    }
  }
`
