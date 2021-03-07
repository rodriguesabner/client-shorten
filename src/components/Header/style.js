import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
  
  background: #fff;
  z-index: 10;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3em;

  @media (max-width: 768px) {
    padding: 0 2em;
  }

  .logo {
    font-size: 22px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    transition-duration: 300ms;

    :hover {
      b {
        color: #37AFB4;
      }
    }

    b {
      color: #000;
    }
  }

  div {
    display: flex;
    align-items: center;

    .btn {
      @media (max-width: 768px) {
        display: none;
      }      
      
      text-decoration: none;
      padding: 10px;
      //background: #E7F7F8;
      background: #fff;
      color: #37AFB4;
      font-weight: 600;
      cursor: pointer;
      outline: 0;
      transition-duration: 200ms;
      position: relative;
      z-index: 1;
      overflow: hidden;

      &:before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #E7F7F8;
        //background: #583d30;

        transition: 700ms ease;
      }
    }

    .btn1 {
      &:before {
        width: 0;
        height: 100%;
      }

      &:hover {
        &:before {
          width: 100%;
          height: 100%;
        }
      }
    }

    svg {
      margin-left: 2em;
      cursor: pointer;

      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
  }
`
