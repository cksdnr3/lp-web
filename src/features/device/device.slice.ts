import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { Device } from 'src/styles/theme/media';

export interface DeviceState {
  device: Device;
}

const initialState: DeviceState = {
  device: 'large',
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice(state, { payload }: PayloadAction<DeviceState>) {
      state.device = payload.device;
    },
  },
});
export default deviceSlice.reducer;

export const deviceActions = deviceSlice.actions;
export const selectDevice = (state: RootState) => state.device;
