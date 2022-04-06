import { Link } from 'react-router-dom';
import styled from 'styled-components';

export namespace ProfileStyles {
  export const Wrapper = styled.div`
    ${({ theme }) => theme.flexSet({})};
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]}, 0.4);
    border-radius: 6px;
    margin: 28px 0;
  `;

  export const ImageContainer = styled.div`
    ${({ theme }) => theme.flexSet({ direction: 'column', align: 'center' })};
    flex: 1;
    background-color: rgb(${({ theme }) => theme.palette.white[300]});
    border-radius: 5px 0 0 5px;
    padding: 23px 0;

    & > *:not(:last-child) {
      margin-bottom: 8px;
    }
  `;

  export const ImageWrapper = styled.div``;
  export const Image = styled.img`
    width: 77px;
    height: 77px;
  `;
  export const Account = styled.div`
    color: rgb(${({ theme }) => theme.palette.white[100]});
    font-weight: 600;
  `;
  export const Rating = styled.div``;

  export const StyledLink = styled(Link)`
    border: 1px solid rgb(${({ theme }) => theme.palette.white[100]});
    padding: 7px 12px;
    color: rgb(${({ theme }) => theme.palette.white[100]});
    font-size: 14px;
  `;

  export const InfoContainer = styled.div`
    flex: 2;
    background-color: rgb(${({ theme }) => theme.palette.white[100]});
    border-radius: 0 5px 5px 0;
    padding: 23px 33px;
  `;

  export const DetailContainer = styled.div``;

  export const Detail = styled.div`
    font-size: 12px;
  `;
}
