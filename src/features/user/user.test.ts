import reducer, { userActions, userSlice } from './user.slice';

test('initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined,
    }),
  ).toEqual({
    email: '',
    name: '',
    role: 'NONE',
  });
});

test('dispatch - login', () => {
  expect(
    reducer(
      userSlice.getInitialState(),
      userSlice.actions.login({ email: 'user@naver.com', name: 'chanuk', role: 'USER' }),
    ),
  ).toEqual({
    email: 'user@naver.com',
    name: 'chanuk',
    role: 'USER',
  });
});

test('dispatch - logout', () => {
  expect(reducer(userSlice.getInitialState(), userSlice.actions.logout())).toEqual({
    ...userSlice.getInitialState(),
  });
});
