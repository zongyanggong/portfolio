import { weatherRequest } from "../request";

export function getWeatherInfo(position) {
  return weatherRequest.get({
    // url: `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`,
    url: `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=481f1bca8bf1f3af959add1f7ba39482`,
  });
}
