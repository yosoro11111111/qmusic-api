import Router from "@koa/router";
import uhttp from "../http-client/uhttp.js";
import { guid, fileType } from "../utils/index.js";
import _ from "lodash";
import config from "../project.config.js";

const router = new Router();

// 获取歌曲详情
router.get("/getSongInfo", async (ctx) => {
  const song_mid = ctx.query.songmid;
  const song_id = ctx.query.songid || "";
  const params = {
    g_tk: 1124214810,
    loginUin: "0",
    hostUin: 0,
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0,
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

// 获取歌曲链接：如 http://localhost:3001/getMusicPlay?songmid=000o3Ay7339Lf4
router.get("/getMusicPlay", async (ctx) => {
  const { quality = 128, songmid, mediaId, resType = "play" } = ctx.query;
  const { uin } = config;
  const songmids = songmid ? songmid.split(",") : [];
  const fileInfo = fileType[quality];
  const justPlayUrl = resType === "play";
  const file = songmids.map(
    (songmid) => fileInfo.s + songmid + (mediaId || songmid) + fileInfo.e
  );

  const params = {
    sign: "zzannc1o6o9b4i971602f3554385022046ab796512b7012",
    data: JSON.stringify({
      req_0: {
        module: "vkey.GetVkeyServer",
        method: "CgiGetVkey",
        param: {
          filename: file,
          guid,
          songmid: songmids,
          songtype: [0],
          uin,
          loginflag: 1,
          platform: "20",
        },
      },
      loginUin: uin,
      comm: {
        uin,
        format: "json",
        ct: 24,
        cv: 0,
      },
    }),
  };
  const res = await uhttp.get("/", { params });
  const response = res.data;
  console.log(response);

  const domain =
    _.get(response, "req_0.data.sip", []).find(
      (i) => !i.startsWith("http://ws")
    ) || _.get(response, "req_0.data.sip[0]");

  let playUrl = {};
  _.get(response, "req_0.data.midurlinfo", []).forEach((item) => {
    playUrl[item.songmid] = {
      url: item.purl ? `${domain}${item.purl}` : "",
      error: !item.purl && "暂无播放链接",
    };
  });
  response.playUrl = playUrl;
  ctx.body = justPlayUrl ? { playUrl } : response;
});

export default router;
