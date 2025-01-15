import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";
import uhttp from "../http-client/uhttp.js";

const router = new Router();

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
// 获取歌单列表
router.get("/getSongListDetail", async (ctx) => {
  console.log(1111, ctx.query);
  const params = {
    format: "json",
    outCharset: "utf-8",
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    new_format: 1,
    ...ctx.query,
  };
  const res = await yhttp.get("/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg", {
    params,
  });
  ctx.body = res.data;
});

export default router;
