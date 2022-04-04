import { thunk } from './thunk';

export const create = () => {
  const store = {
    getState: jest.fn(),
    dispatch: jest.fn(),
  };

  const next = jest.fn();

  const invoke = (action: any) => thunk(store)(next)(action);

  return { store, invoke };
};
