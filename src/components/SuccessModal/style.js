import styled from 'styled-components'

export const Layout = styled.div`
  //padding: 10px;
  border-radius: 10px;
  width: 300px;
  background: rgba(255, 255, 255, .9);
  //backdrop-filter: blur(10px);
`

export const RepeaterContainer = styled.section`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    .title {
      text-align: center;
      font-size: 16px;
      padding: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, .3);
    }

    .first {
      border-radius: 20px 20px 0 0;
      border-top: 0;
      //border-bottom: 0;
    }

    .description {
      padding: 15px 2em;
      text-align: center;
    }

    .bottom-items {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      border-top: 1px solid rgba(0, 0, 0, .3);

      button {
        cursor: pointer;
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0;

        color: #4980ed;
      }
    }
  }
`
