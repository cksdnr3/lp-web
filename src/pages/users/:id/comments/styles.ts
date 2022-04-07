import styled from 'styled-components';

export namespace ActivityCommentsStyles {
  export const Wrapper = styled.div`
    & > div:not(:last-child) {
      margin-bottom: 20px;
    }
  `;

  export const CommentsInput = styled.div`
    border: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
    border-radius: 4px;
    padding-top: 17px;
  `;

  export const CommentsTextArea = styled.textarea`
    width: 100%;
    padding: 0 17px;
  `;

  export const Toolbox = styled.div`
    ${({ theme }) => theme.flexSet({ justify: 'space-between', align: 'center' })};
    padding: 6px 17px;
    border-top: 1px solid rgb(${({ theme }) => theme.palette.white[300]});
  `;

  export const TextCounter = styled.div`
    font-size: 13px;
    color: rgb(${({ theme }) => theme.palette.white[500]});
  `;

  export const RegisterButton = styled.button`
    ${({ theme }) => theme.flexSet({ align: 'center', justify: 'center' })};
    text-align: center;
    height: 30px;
    width: 69px;
    padding: 6px 11px;
    border: 1px solid rgb(${({ theme }) => theme.palette.white[400]});
    border-radius: 4px;
    color: rgb(${({ theme }) => theme.palette.white[600]});
    transition: background 0.2s;
    transition: color 0.2s;

    & > *:not(:last-child) {
      margin-right: 5px;
    }

    &:disabled {
      pointer-events: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.main.color('dark')};
      border: 1px solid transparent;
      color: rgb(${({ theme }) => theme.palette.white[200]});
    }
  `;

  export const CommentsWrapper = styled.div`
    & > div:not(:last-child) {
      margin-bottom: 11px;
    }
  `;

  export const CommentWrapper = styled.div`
    ${({ theme }) => theme.flexSet({})};
    font-size: 14px;
  `;

  export const ImageWrapper = styled.div`
    margin-right: 18px;
  `;
  export const Image = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  `;

  export const CommentBox = styled.div`
    width: 100%;

    & > div:not(:last-child) {
      margin-bottom: 10px;
    }
  `;

  export const CommentHeader = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};

    & > *:not(:last-child) {
      margin-right: 7px;
    }
  `;
  export const CommentBody = styled.div``;
  export const CommentFooter = styled.div``;
  export const Author = styled.div`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
  `;
  export const CreatedAt = styled.span`
    color: gray;
    font-size: 11px;
  `;

  export const ReplyButton = styled.div`
    ${({ theme }) => theme.flexSet({ align: 'center' })};
    font-size: 13px;
    cursor: pointer;
  `;
}
