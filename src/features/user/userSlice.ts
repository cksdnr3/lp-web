import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

export interface UserState {
  name: string;
  profileImage: string;
}

const initialState: UserState = {
  name: '',
  profileImage: '',
} as const;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
