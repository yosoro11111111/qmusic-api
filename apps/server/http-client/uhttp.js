import axios from "axios";

const qm_keyst = "Q_H_L_63k3N8Ydcsi57WGO_-0WqNHzI2n7QOcEaKLJkFoQIXHlbP4ok2I9_IME1AsMWMl8A1u6e3eGhLLgtELW8gvPUBQ"
const instance = axios.create({
  headers: {
    referer: 'https://y.qq.com/portal/player.html',
			host: 'u.y.qq.com',
			'content-type': 'application/x-www-form-urlencoded',
			// 'cookie': userInfoConfig.cookie,
      'cookie': 'uin=869043928;qm_keyst='+qm_keyst,
  },
  baseURL: "https://u.y.qq.com/cgi-bin/musicu.fcg",
});

instance.interceptors.request.use((config) => {
  // config.params = { format: "json", outCharset: "utf-8", ...config.params };
  return config;
});

export default instance;
