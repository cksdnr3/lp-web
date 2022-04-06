import { MouseEvent, useCallback } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { AuthApi } from 'src/apis/auth';
import { selectUser } from 'src/features/user/user.slice';
import { token } from 'src/utils/token';
import { userActions } from 'src/features/user/user.slice';
import { NotificationApi } from 'src/apis/notification';
import { useToggle } from 'src/hooks/useToggle';

export const useHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const notificationsQuery = useQuery('/notifications', () => NotificationApi.get.notifications());
  const {
    toggle: notificationToggle,
    onOpenToggle: onOpenNotification,
    onCloseToggle: onCloseNotification,
    onToggle: onToggleNotification,
  } = useToggle();

  const logout = useMutation((event: MouseEvent) => AuthApi.post.logout({}), {
    onSuccess: () => {
      dispatch(userActions.logout());
      token.removeToken();
    },
  });

  return {
    state: { user, notificationToggle },
    query: { logout },
    event: { onOpenNotification, onCloseNotification, onToggleNotification },
  };
};
