import styled from 'styled-components';

export namespace CardStyles {
  export const Wrapper = styled.div`
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
    height: 155px;
    border-radius: 11px;

    ${({ theme }) => theme.media.small`
    border-radius: 17px;
    `}
  `;

  export const Title = styled.div`
    font-weight: 500;
    font-size: 16px;
    padding: 8px 6px;
  `;

  export const Description = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between' })};
    padding: 4px 6px;
    font-size: 12px;
    color: ${({ theme }) => theme.main.color('dark', 0.8)};

    & > div {
      font-weight: 600;
    }
  `;
}
