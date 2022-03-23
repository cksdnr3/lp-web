import styled from 'styled-components';

export namespace InputStyle {
  export const Label = styled.label<{ isLabel?: boolean }>`
    position: relative;

    & > span {
      position: relative;
      top: 2.3rem;
      width: 100%;
      color: rgb(178, 178, 178);
      font-weight: 600;
      font-size: 0.9rem;
    }

    & > button {
      position: absolute;
      top: ${({ isLabel }) => (isLabel ? '1.55rem' : '-0.30rem')};
      right: 0px;
    }
  `;

  export const Input = styled.input`
    width: 100%;
    padding: 0.7rem 0rem;
    border-bottom: 1px solid rgb(229, 229, 229);
    font-size: 1rem;
    letter-spacing: 1px;
    transition: background 0.2s;

    &[type='password'] {
      font-size: 1.3125rem;
      letter-spacing: 5px;
    }

    &:disabled {
      background: rgba(96, 154, 233, 0.3);
    }
  `;

  export const ErrorMessage = styled.div`
    position: absolute;
    color: rgb(255, 105, 97);
    font-size: 0.8rem;
  `;
}
