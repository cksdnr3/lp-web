import { ActionCreator, AnyAction } from '@reduxjs/toolkit';

export const thunk =
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
