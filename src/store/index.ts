import { configureStore } from '@reduxjs/toolkit';
import deviceSlice from 'src/features/device/device.slice';
import userSlice from 'src/features/user/user.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    device: deviceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
