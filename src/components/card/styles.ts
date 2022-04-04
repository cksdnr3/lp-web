import styled from 'styled-components';

export namespace CardStyles {
  export const Wrapper = styled.div`
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.7);
    width: 100%;
    height: 100%;
    font-size: 14px;

    ${({ theme }) => theme.media.medium`
      border: none;
    `}

    ${({ theme }) => theme.media.small`
      border: none;
    `}
  `;

  export const Image = styled.img`
    width: 100%;
    height: 200px;
    ${({ theme }) => theme.media.medium`
    border-radius: 22px;
    `}

    ${({ theme }) => theme.media.small`
    border-radius: 17px;
    `}
  `;

  export const Title = styled.div`
    padding: 12px 6px;
  `;

  export const Description = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between' })};
    padding: 8px 6px;
  `;
}
