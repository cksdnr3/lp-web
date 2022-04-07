import React from 'react';
import { NotificationBoxStyles } from './styles';

function NotificationBox() {
  return (
    <NotificationBoxStyles.Wrapper>
      <NotificationBoxStyles.Notification>
        <div>gosu</div>
        <div>blah blah</div>
      </NotificationBoxStyles.Notification>
      <NotificationBoxStyles.Notification>
        <div>sellersel</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus hic repellat earum accusamus.</div>
      </NotificationBoxStyles.Notification>
      <NotificationBoxStyles.Notification>
        <div>cksdnr3</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nihil!</p>
      </NotificationBoxStyles.Notification>
    </NotificationBoxStyles.Wrapper>
  );
}

export default NotificationBox;
