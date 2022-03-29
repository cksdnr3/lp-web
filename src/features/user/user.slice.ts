import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

const ROLE = {
  NONE: 0,
  USER: 1,
} as const;

export interface UserState {
  email: string;
  name: string;
  role: keyof typeof ROLE;
}

const initialState: UserState = {
  email: '',
  name: '',
  role: 'NONE',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<UserState>) {
      state.name = payload.name;
    },
    logout() {
      return {
        ...initialState,
      };
    },
  },
});
export default userSlice.reducer;

export const userActions = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
