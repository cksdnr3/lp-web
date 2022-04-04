import styled from 'styled-components';

export namespace DropdownStyle {
  export const Wrapper = styled.div<{ drop?: boolean }>`
    display: ${({ drop }) => (drop ? 'block' : 'none')};
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    width: 155px;
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.5);
  `;

  export const Menu = styled.div`
    padding: 15px 10px;
    font-size: 14px;
    font-weight: 700;
    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(${({ theme }) => theme.palette.white[300]}, 0.2);
      color: ${({ theme }) => theme.main.color('dark', 0.7)};
    }
  `;
}
