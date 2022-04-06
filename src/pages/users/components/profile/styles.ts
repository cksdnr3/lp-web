import { CameraFilled } from '@ant-design/icons';
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
      margin-bottom: 9px;
    }
  `;

  export const ImageWrapper = styled.div<{ me: boolean }>`
    position: relative;
    cursor: ${({ me }) => me && 'pointer'};
  `;

  export const Image = styled.img`
    width: 66px;
    height: 66px;
  `;

  export const ImageEdit = styled(CameraFilled)`
    position: absolute;
    top: 47px;
    right: 2px;
    color: rgb(${({ theme }) => theme.palette.white[600]});
    font-size: 24px;
  `;

  export const Account = styled.div<{ me: boolean }>`
    color: rgb(${({ theme }) => theme.palette.white[100]});
    font-weight: 600;
    cursor: ${({ me }) => me && 'pointer'};
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

    & > *:not(:last-child) {
      margin-bottom: 22px;
    }
  `;

  export const DetailContainer = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between' })};
    width: 80%;

    & > div:not(:last-of-type) {
      margin-right: 6px;
      border-right: 1px solid rgb(${({ theme }) => theme.palette.white[500]});
      border-radius: 4px;
    }
  `;

  export const Detail = styled.div`
    flex: 1;
    font-size: 12px;
    color: #fff;
    text-align: center;

    & > div {
      margin-bottom: 3px;
    }

    & > span {
      color: ${({ theme }) => theme.main.color('light', 0.7)};
      font-weight: 700;
    }
  `;
  //  fontSize: 18, fontWeight: 600, cursor: `${id}` === params.id ? 'pointer' : '' }}>
  export const InfoEditButton = styled.div<{ me: boolean }>`
    font-size: 18px;
    font-weight: 600;
    cursor: ${({ me }) => me && 'pointer'};
  `;
}
