import React from 'react';
import { NotificationBoxStyles } from './styles';

function NotificationBox() {
  return (
    <NotificationBoxStyles.Wrapper>
      <NotificationBoxStyles.Notification>알림 1</NotificationBoxStyles.Notification>
      <NotificationBoxStyles.Notification>알림 2</NotificationBoxStyles.Notification>
      <NotificationBoxStyles.Notification>알림 3</NotificationBoxStyles.Notification>
      <NotificationBoxStyles.Notification>알림 4</NotificationBoxStyles.Notification>
    </NotificationBoxStyles.Wrapper>
  );
}

export default NotificationBox;
