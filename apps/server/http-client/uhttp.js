import axios from "axios";

const instance = axios.create({
  headers: {
    referer: "https://y.qq.com/portal/player.html",
    host: "u.y.qq.com",
    "content-type": "application/x-www-form-urlencoded",
    // 'cookie': userInfoConfig.cookie,
  },
  baseURL: "https://u.y.qq.com/cgi-bin/musicu.fcg",
});
export default instance;
