import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { transportState, transportType } from "../types/types";

const initialState: transportState = {
  state: null,
  id: null,
  direction: null,
  stations: [],
};

const transportSlice = createSlice({
  name: "transport",
  initialState,
  reducers: {
    stateChange: (
      state: transportState,
      action: PayloadAction<{ state: transportType }>
    ) => {
      state.state = action.payload.state;
      state.direction = null;
      state.id = null;
      state.stations = [];
    },
    setStations: (
      state: transportState,
      action: PayloadAction<{ id: string; stations: string[] }>
    ) => {
      state.id = action.payload.id;
      state.stations = action.payload.stations;
    },
  },
});

//액션 생성자
export const transportActions = transportSlice.actions;
export default transportSlice.reducer;
