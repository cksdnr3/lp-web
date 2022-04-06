import React from 'react';
import { useParams } from 'react-router-dom';
import { ActivityStyles } from './styles';

function Activity() {
  const params = useParams<{ activity: string }>();
  return <ActivityStyles.Wrapper>{params.activity}</ActivityStyles.Wrapper>;
}

export default Activity;
