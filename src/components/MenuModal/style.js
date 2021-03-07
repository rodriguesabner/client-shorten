import styled from 'styled-components'

export const Layout = styled.div`
  //padding: 10px;
  border-radius: 20px;
  width: 250px;
`

export const RepeaterContainer = styled.section`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    .first {
      border-radius: 20px 20px 0 0;
      border-top: 0;
      border-bottom: 0;
    }

    .last {
      border-radius: 0 0 20px 20px;
      border-top: 0;
      border-bottom: 0;
    }

    .btn {
      border: 0;
      outline: 0;
      border-top: 1px solid rgba(0, 0, 0, .3);
      padding: 15px;
      background: #fff;
      font-size: 15px;
      text-decoration: none;
      color: #000;
      text-align: center;

      :hover {
        cursor: pointer;
      }
    }

    .red {
      font-weight: 600;
      color: #ED4965;
    }

    .blue {
      font-weight: 600;
      color: #4980ed;
    }
  }
`
