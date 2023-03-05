import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  padding: 48px 40px;

  h1 {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 36px;

    margin-bottom: 40px;
  }

  button {
    align-self: flex-end;

    margin-top: 48px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-weight: 600;

    border: 0;
    border-radius: 8px;

    color: #fff;
    background: #39b100;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;

      margin: 0 auto;
      padding: 16px 16px;

      border-radius: 0 8px 8px 0;

      background: #41c900;
    }
  }
`;
