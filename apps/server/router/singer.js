import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";
import { guid, fileType } from "../utils/index.js";
import _ from "lodash";
import config from "../project.config.js";
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

export default router;
