import { getWeatherInfo } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeatherDataAction = createAsyncThunk(
  "fetchWeather",
  (payload, { dispatch }) => {
    navigator.geolocation.getCurrentPosition((position) =>
      getWeatherInfo(position).then((res) =>
        dispatch(changeWeatherInfoAction(res))
      )
    );
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherInfo: {},
  },
  reducers: {
    changeWeatherInfoAction(state, { payload }) {
      console.log(payload);
      state.weatherInfo = payload;
    },
  },
});

export const { changeWeatherInfoAction } = weatherSlice.actions;

export default weatherSlice.reducer;
