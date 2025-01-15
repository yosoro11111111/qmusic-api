import axios from "axios";

const instance = axios.create({
  headers: {
    referer: 'https://y.qq.com/portal/player.html',
			host: 'u.y.qq.com',
			'content-type': 'application/x-www-form-urlencoded',
			// 'cookie': userInfoConfig.cookie,
      'cookie': '',
  },
  baseURL: "https://u.y.qq.com/cgi-bin/musicu.fcg",
});

instance.interceptors.request.use((config) => {
  // config.params = { format: "json", outCharset: "utf-8", ...config.params };
  return config;
});

export default instance;
