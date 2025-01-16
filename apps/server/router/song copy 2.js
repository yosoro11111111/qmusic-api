import Router from "@koa/router";
import uhttp from "../http-client/uhttp.js";
import { _guid } from "../utils/index.js";
import { generateSignData } from "../utils/sign.js";

const router = new Router();

// 获取歌曲详情
router.get("/getSongInfo", async (ctx) => {
  const song_mid = ctx.query.songmid;
  const song_id = ctx.query.songid || "";
  const params = {
    g_tk: 1124214810,
    loginUin: "0",
    hostUin: 0,
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0,
    format: "json",
    data: JSON.stringify({
      comm: {
        ct: 24,
        cv: 0,
      },
      songinfo: {
        method: "get_song_detail_yqq",
        param: {
          song_type: 0,
          song_mid,
          song_id,
        },
        module: "music.pf_song_detail_svr",
      },
    }),
  };
  const res = await uhttp.get("/", { params });
  ctx.body = res.data;
});

// 获取歌曲链接
router.get("/getMusicPlay", async (ctx) => {
  console.log(111111);
  const uin = "869043928";
  const paramsTemp = {
    comm: JSON.stringify({
      cv: 4747474,
      ct: 24,
      format: "json",
      inCharset: "utf-8",
      outCharset: "utf-8",
      notice: 0,
      platform: "yqq.json",
      needNewCode: 1,
      uin,
    }),
    song: JSON.stringify({
      module: "vkey.GetVkeyServer",
      method: "CgiGetVkey",
      param: {
        guid: "6772351499",
        songmid: ctx.query.mid,
        songtype: [0],
        uin,
        loginflag: 1,
        platform: "20",
      },
    }),
  };
  const sign = generateSignData(paramsTemp);
  const params = { ...paramsTemp, sign };
  console.log(2222222, params);

  const res = await uhttp.get("/", { params });
  ctx.body = res.data;
});

export default router;
