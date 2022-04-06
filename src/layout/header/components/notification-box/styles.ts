import styled from 'styled-components';

export namespace NotificationBoxStyles {
  export const Wrapper = styled.div`
    position: absolute;
    top: 100%;
    right: calc(-300px / 2);
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    border-radius: 8px;
    padding: 13px;
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    width: 300px;
    max-height: 480px;
    overflow-y: scroll;
    z-index: 1000;
  `;

  export const Notification = styled.div`
    padding: 6px 0;
    cursor: pointer;
    &:hover {
      background-color: rgb(227, 236, 248, 0.3);
    }
  `;
}
