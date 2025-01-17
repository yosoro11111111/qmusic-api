export const commonParams = {
  g_tk: 1124214810,
  loginUin: global.userInfo?.uin || "0",
  hostUin: 0,
  inCharset: "utf8",
  outCharset: "utf-8",
  // format: 'json',
  notice: 0,
  platform: "yqq.json",
  needNewCode: 0,
};

export const guid = "1429839143"; // 默认给一个
// export const guid =
//   (Math.round(2147483647 * Math.random()) * new Date().getUTCMilliseconds()) %
//   1e10;


export const fileType = {
  128: {
    s: "M500",
    e: ".mp3",
  },
  320: {
    s: "M800",
    e: ".mp3",
  },
  m4a: {
    s: "C400",
    e: ".m4a",
  },
  ape: {
    s: "A000",
    e: ".ape",
  },
  flac: {
    s: "F000",
    e: ".flac",
  },
};
