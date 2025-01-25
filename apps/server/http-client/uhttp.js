import axios from "axios";
import config from "../project.config.js";

const instance = axios.create({
  headers: {
    referer: "https://y.qq.com/",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://y.qq.com",
    host: "u6.y.qq.com",
    cookie: `uin=${config.uin};qm_keyst=${config.qm_keyst}`,
    "content-type": "application/x-www-form-urlencoded",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
  },
  baseURL: "https://u6.y.qq.com/cgi-bin/musics.fcg",
});

instance.interceptors.request.use((config) => {
  config.params = {
    format: "json",
    outCharset: "utf-8",
    inCharset: "utf8",
    ...config.params,
  };
  return config;
});

instance.interceptors.response.use((res) => res.data);

export default instance;
