import axios from "axios";

const instance = axios.create({
  headers: {
    referer: "https://c.y.qq.com",
    host: "c.y.qq.com",
  },
  baseURL: "https://c.y.qq.com",
});

instance.interceptors.request.use((config) => {
  config.params = { format: "json", outCharset: "utf-8", ...config.params };
  return config;
});
instance.interceptors.response.use((res) => {
  return res;
});

export default instance;
