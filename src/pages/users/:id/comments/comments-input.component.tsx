import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useComments } from './hook';
import { ActivityCommentsStyles } from './styles';
import { FaPencilAlt } from 'react-icons/fa';

const MAX_TEXT_LENGTH = 100;

type CommentsInputProps = ReturnType<typeof useComments>;

function CommentsInput({ input, event, mutate }: CommentsInputProps) {
  return (
    <ActivityCommentsStyles.CommentsInput>
      <ActivityCommentsStyles.CommentsTextArea
        {...input.comments}
        maxLength={MAX_TEXT_LENGTH}
        placeholder="상품문의를 입력하세요."
      />
      <ActivityCommentsStyles.Toolbox>
        <ActivityCommentsStyles.TextCounter>
          {input.comments.value.length} / {MAX_TEXT_LENGTH}
        </ActivityCommentsStyles.TextCounter>
        <ActivityCommentsStyles.RegisterButton onClick={event.onRegist} disabled={!input.comments.isValid}>
          {mutate.comments.isLoading ? (
            <LoadingOutlined />
          ) : (
            <>
              <FaPencilAlt /> &nbsp; 등록
            </>
          )}
        </ActivityCommentsStyles.RegisterButton>
      </ActivityCommentsStyles.Toolbox>
    </ActivityCommentsStyles.CommentsInput>
  );
}

export default CommentsInput;
