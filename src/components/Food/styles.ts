import styled, { css } from 'styled-components';

interface ContainerProps {
  available: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 8px;

  background: #f0f0f5;

  header {
    overflow: hidden;

    height: 192px;

    text-align: center;

    border-radius: 8px 8px 0px 0px;

    transition: 0.3s opacity;

    background: #ffb84d;

    ${({ available }) =>
      !available &&
      css`
        opacity: 0.3;
      `};

    img {
      pointer-events: none;

      user-select: none;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      margin-top: 16px;

      color: #3d3d4d;
    }

    .price {
      font-size: 24px;
      font-style: normal;
      line-height: 34px;

      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;

    border-radius: 0px 0px 8px 8px;

    background: #e4e4eb;

    div.icon-container {
      display: flex;

      button {
        display: flex;

        padding: 10px;

        border: none;
        border-radius: 8px;

        transition: 0.1s;

        background: #fff;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 6px;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }

      .switch {
        position: relative;
        display: inline-block;

        width: 88px;
        height: 32px;

        margin-left: 12px;

        & input {
          width: 0;
          height: 0;
          opacity: 0;
        }

        .slider {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          border-radius: 16px;

          cursor: pointer;

          background-color: #c72828;

          -webkit-transition: 0.4s;
          transition: 0.4s;

          &:before {
            position: absolute;
            content: '';
            left: 8px;
            bottom: 6px;

            height: 20px;
            width: 40px;

            border-radius: 10px;

            -webkit-transition: 0.4s;
            transition: 0.4s;

            background-color: white;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
  }
`;
