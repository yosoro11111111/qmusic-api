import Router from "@koa/router";
import uhttp from "../http-client/uhttp.js";
import {_guid} from "../utils/index.js"

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
  const uin =  "0";
  const songmid = ctx.query.songmid + "";
  // response data only need play url value (all play)
  const justPlayUrl = (ctx.query.resType || "play") === "play";
  const guid = _guid ? _guid + "" : "1429839143";
  let { quality = 128, mediaId } = ctx.query;
  const fileType = {
    m4a: {
      s: "C400",
      e: ".m4a",
    },
    128: {
      s: "M500",
      e: ".mp3",
    },
    320: {
      s: "M800",
      e: ".mp3",
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
  const songmidList = songmid.split(",");
  const fileInfo = fileType[quality];
  const file = songmidList.map(
    (_) => `${fileInfo.s}${_}${mediaId || _}${fileInfo.e}`
  );
  const params = Object.assign({
    format: "json",
    sign: "zzannc1o6o9b4i971602f3554385022046ab796512b7012",
    data: JSON.stringify({
      req_0: {
        module: "vkey.GetVkeyServer",
        method: "CgiGetVkey",
        param: {
          filename: file,
          guid,
          songmid: songmidList,
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
  });
  const res = await uhttp.get("/", { params });
  ctx.body = res.data;
});

export default router;
