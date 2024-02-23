import React, { useEffect, useState } from "react";
// import { fetchWeatherDataAction } from "@/store/modules/weatherReducer";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Box, Typography, styled } from "@mui/material";
import axios from "axios";

const Weather = () => {
  //   const { weatherInfo } = useSelector(
  //     (state) => ({
  //       weatherInfo: state.weather.weatherInfo,
  //     }),
  //     shallowEqual
  //   );

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchWeatherDataAction());
  //   }, [dispatch]);
  const [weatherInfo, setWeatherInfo] = useState({});
  useEffect(() => {
    function onGetSucess(position) {
      getWeatherInfo(position);
    }

    function onError(error) {
      console.error("Error obtaining location: ", error);
    }

    navigator.geolocation.getCurrentPosition(onGetSucess, onError);
    // getWeatherInfo();
  }, []);

  const getWeatherInfo = async (position) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
    );
    if (typeof response !== "undefined") {
      setWeatherInfo(response.data);
    }
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    position: "fixed",
    top: 40,
    left: 50,
    textAlign: "center",
    backgroundColor: "#262626",
    borderRadius: "10px",
    padding: "10px 30px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }));

  return (
    <Box>
      {weatherInfo.main && (
        <CustomBox>
          <Typography variant="h6">{weatherInfo.name}</Typography>
          <Typography variant="h5">
            {parseFloat(weatherInfo.main.temp).toFixed(1)}&deg;c
          </Typography>
          {/* <img
        src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
        alt=""
      /> */}
          <img src={`./images/${weatherInfo.weather?.[0]?.icon}.png`} alt="" />
          <Typography style={{ textTransform: "capitalize" }}>
            {weatherInfo.weather?.[0]?.description}
          </Typography>

          <Typography>
            Min: {parseFloat(weatherInfo.main.temp_min).toFixed(1)}&deg;c
          </Typography>
          <Typography>
            Max:
            {parseFloat(weatherInfo.main.temp_max).toFixed(1)}&deg;c
          </Typography>
          <Typography>Feels like: {weatherInfo.main.feels_like}</Typography>
        </CustomBox>
      )}
    </Box>
  );
};

export default Weather;
