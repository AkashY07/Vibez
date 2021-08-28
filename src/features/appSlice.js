import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';

const initialState = {
  roomid: null,
  status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state,action) => {
      state.roomid = action.payload.roomid;
    },
  },
});

export const {enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomid;

export default appSlice.reducer;
