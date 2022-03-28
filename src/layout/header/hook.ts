import { MouseEvent, useCallback } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { authAPI } from 'src/apis/auth';
import { selectUser } from 'src/features/user/userSlice';
import { token } from 'src/utils/token';
import { userActions } from 'src/features/user/userSlice';

export const useHeader = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logout = useMutation((event: MouseEvent) => authAPI.post.logout({}), {
    onSuccess: () => {
      dispatch(userActions.logout());
      token.removeToken();
    },
  });

  return {
    state: { user },
    query: { logout },
  };
};
