import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0;

  background: #c72828;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 1280px;

    margin: 0 auto;
    padding: 0 0 160px;

    nav {
      div {
        button {
          display: flex;
          flex-direction: row;
          align-items: center;

          font-weight: 600;

          border-radius: 8px;
          border: 0;

          color: #fff;

          background: #39b100;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;

            padding: 16px 16px;
            margin: 0 auto;

            border-radius: 0 8px 8px 0;

            background: #41c900;
          }
        }
      }
    }
  }
`;
