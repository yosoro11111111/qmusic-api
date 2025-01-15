import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";
import uhttp from "../http-client/uhttp.js";
import { commonParams } from "../utils/index.js";

const router = new Router();
router.get("/", async (ctx, next) => {
  ctx.body = "Hello";
});

// 获取歌单分类
router.get("/getSongListCategories", async (ctx, next) => {
  const res = await yhttp.get("/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg");
  ctx.body = res.data;
});

// 获取歌单列表
router.get("/getSongLists", async (ctx) => {
  const { limit = 20, page = 0, sortId = 5, categoryId = 10000000 } = ctx.query;
  const sin = +page * +limit;
  const ein = +limit * (+page + 1) - 1;
  const params = { picmid: 1, categoryId, sortId, sin, ein };
  const res = await yhttp.get("/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg", {
    params,
  });
  ctx.body = res.data;
});

// 获取歌单详情
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

export default router;
