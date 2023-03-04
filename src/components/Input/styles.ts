import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 1rem;

  padding: 18px 24px;

  border-radius: 8px;

  background: #fff;

  & + div {
    margin-top: 24px;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 36px;

    margin-bottom: 40px;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #ff9000;

      border-color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;

    border: 0;

    color: #b7b7cc;

    background: transparent;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
