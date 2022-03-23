import styled from 'styled-components';

export namespace ButtonStyle {
  export const Button = styled.button`
    width: 100%;
    border-radius: 6px;
    padding: 15px 0px;
    background-color: rgb(216, 12, 24);
    text-align: center;
    font-weight: 600;
    font-size: 1.125rem;
    color: #fff;
    cursor: pointer;
    transition: background 0.25s;

    &:hover {
      background-color: rgba(216, 12, 24, 0.7);
    }

    &:disabled {
      background-color: rgba(216, 12, 24, 0.5);
      cursor: not-allowed;
    }
  `;
}
