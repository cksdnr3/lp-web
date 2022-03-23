import styled from 'styled-components';

export namespace EmailStyle {
  export const Button = styled.button`
    padding: 6px 12px;
    border-radius: 5px;
    background: rgb(216, 12, 24);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
      background: rgb(216, 12, 24, 0.7);
    }

    &:disabled {
      background-color: rgb(206, 208, 218);
      cursor: not-allowed;
    }
  `;

  export const Footer = styled.div`
    & a:hover {
      text-decoration: underline;
    }
  `;
}
