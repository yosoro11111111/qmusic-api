import Router from "@koa/router";
import uhttp from "../http-client/uhttp.js";
import { guid, fileType } from "../utils/index.js";
import _ from "lodash";
import config from "../project.config.js";
import JsonResult from "../utils/json-result.js";
import signTool from "../utils/sign.js"

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
  console.log(res);

  if (res.code === 0) {
    ctx.body = JsonResult.sucess(res.songinfo.data);
  } else {
    ctx.body = JsonResult.error("暂无数据");
  }
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

  const paramsJson = {
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
  };
  const paramString = JSON.stringify(paramsJson);
  const params = {
    sign: signTool(paramString),
    data: paramString,
  };
  const response = await uhttp.get("/", { params });
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
  // 如果只有一个，直接返回url
  if (Object.keys(playUrl).length === 1) {
    playUrl = Object.values(playUrl)[0].url;
  }
  response.playUrl = playUrl;
  ctx.body = justPlayUrl
    ? JsonResult.sucess(playUrl)
    : JsonResult.sucess(response);
});

export default router;
