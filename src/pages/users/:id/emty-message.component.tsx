import React from 'react';
import { UserStyles } from './styles';

interface EmptymessageProps {
  message: string;
}

function EmptyMessage({ message }: EmptymessageProps) {
  return <UserStyles.EmptyMessage>{message}</UserStyles.EmptyMessage>;
}

export default EmptyMessage;
