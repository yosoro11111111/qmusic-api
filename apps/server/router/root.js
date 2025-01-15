import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";

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
router.get("/getSongLists", async ctx => {
  const { limit = 20, page = 0, sortId = 5, categoryId = 10000000 } = ctx.query;
  const sin = +page * +limit;
  const ein = +limit * (+page + 1) - 1;
  const params = { picmid: 1, categoryId, sortId, sin, ein };
  const res = await yhttp.get("/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg", {
    params,
  });
  ctx.body = res.data;
});

export default router;
