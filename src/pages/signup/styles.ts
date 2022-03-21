import styled from 'styled-components';

export namespace SingupStyle {
  export const Wrapper = styled.div`
    height: 100vh;
    padding-top: 50px;
    background-color: rgb(249, 249, 249);
  `;

  export const Button = styled.button`
    padding: 9px 13px;
    border-radius: 5px;
    background: rgb(255, 105, 97);
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
      background: rgb(255, 105, 97, 0.7);
    }

    &:disabled {
      background-color: rgb(206, 208, 218);
      cursor: not-allowed;
    }
  `;
}
