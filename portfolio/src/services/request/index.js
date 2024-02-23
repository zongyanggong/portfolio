import axios from "axios";
import { QUOTE_BASE_URL, TIMEOUT, WEATHER_BASE_URL } from "./config";

class MYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export const quoteRequest = new MYRequest(QUOTE_BASE_URL, TIMEOUT);
export const weatherRequest = new MYRequest(WEATHER_BASE_URL, TIMEOUT);
