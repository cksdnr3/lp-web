import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

export interface UserState {
  name: string;
}

const initialState: UserState = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<UserState>) {
      state.name = payload.name;
    },
  },
});

export const { login } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
