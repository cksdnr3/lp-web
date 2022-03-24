import styled from 'styled-components';

export namespace ButtonStyle {
  export const Button = styled.button`
    width: 100%;
    border-radius: 6px;
    padding: 15px 0px;
    background-color: ${({ theme }) => theme.main.color()};
    text-align: center;
    font-weight: 600;
    font-size: 1.125rem;
    color: #fff;
    cursor: pointer;
    transition: background 0.25s;

    &:hover {
      background-color: ${({ theme }) => theme.main.color('dark', 0.7)};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.main.color('dark', 0.5)};
      cursor: not-allowed;
    }

    ${({ theme }) => theme.media.medium`
    padding: 12px 5px;
    font-size: 14px;
    `}
  `;
}
