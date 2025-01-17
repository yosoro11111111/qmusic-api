import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";
import uhttp from "../http-client/uhttp.js";
import _ from "lodash";
import dayjs from "dayjs";
import xml2json from "xml2json";

const router = new Router();

// 获取歌曲详情
router.get("/getSingerDesc", async (ctx) => {
  const res = await yhttp.get("/splcloud/fcgi-bin/fcg_get_singer_desc.fcg", {
    params: {
      format: "xml",
      r: dayjs().valueOf(),
      singermid: ctx.query.singermid,
    },
  });
  ctx.body = xml2json.toJson(res.data);
});

router.get("/getSingerAlbum", async (ctx) => {
  const singermid = ctx.query.singermid;
  const num = +ctx.query.limit || 5;
  const begin = +ctx.query.page || 0;

  const params = {
    singermid,
    data: JSON.stringify({
      comm: {
        ct: 24,
        cv: 0,
      },
      singer: {
        method: "GetAlbumList",
        param: {
          sort: 5,
          singermid,
          begin,
          num,
        },
        module: "music.musichallAlbum.AlbumListServer",
      },
    }),
  };

  const res = await uhttp.get("/", { params });
  ctx.body = res.data;
});

export default router;
