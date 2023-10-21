import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clouds: "",
  main: {
    feels_like :undefined,
  },
  name: "",
  sys: "",
  weather: "",
  wind: "",
  isLoaded :false ,
};
const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setDate: (state, action) => {
        const {clouds,main,name,sys,weather,wind} = action.payload;
        state.clouds = action.payload.clouds ;
        state.main = action.payload.main ;
        state.name = action.payload.name ;
        state.sys = action.payload.sys ;
        state.weather = action.payload.weather ;
        state.wind = action.payload.wind ;
        state.isLoaded = true ;
    },
  },
});
export const { setDate } = WeatherSlice.actions;
export default WeatherSlice.reducer;
