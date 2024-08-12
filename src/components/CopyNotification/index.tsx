import React from 'react';
import { NotificationContainer } from './styles';
import { CopyNotificationProps } from './types';

const CopyNotification: React.FC<CopyNotificationProps> = ({ message, visible }) => {
  return (
    <NotificationContainer $visible={visible}>
      {message}
    </NotificationContainer>
  );
};

export default CopyNotification;
