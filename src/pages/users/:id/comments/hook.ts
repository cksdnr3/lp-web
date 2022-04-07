import { useCallback } from 'react';
import { useMutation, useQuery } from 'react-query';
import { CommentsApi } from 'src/apis/comments';
import useInput from 'src/hooks/useInput';
import { Validate } from 'src/utils/validate';

export const useComments = () => {
  const commentsInput = useInput('', Validate.nill);

  const commentsQuery = useQuery('/comments', () => CommentsApi.get.comments());
  const commentsMutation = useMutation(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined);
        }, 500);
      }),
    {
      onSuccess: () => {
        commentsInput.setValue('');
        window.alert('등록');
      },
    },
  );

  const onRegist = useCallback(() => {
    commentsMutation.mutate();
  }, [commentsMutation.mutate]);

  return {
    query: { comments: commentsQuery },
    mutate: { comments: commentsMutation },
    event: { onRegist },
    input: { comments: commentsInput },
  };
};
