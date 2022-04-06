import styled from 'styled-components';

export namespace DropdownStyle {
  export const Wrapper = styled.div<{ drop?: boolean }>`
    display: ${({ drop }) => (drop ? 'block' : 'none')};
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    width: 166px;
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.5);
  `;

  export const Menu = styled.div`
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 700;
    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(${({ theme }) => theme.palette.white[300]}, 0.2);
      color: ${({ theme }) => theme.main.color('dark')};
    }
  `;
}
