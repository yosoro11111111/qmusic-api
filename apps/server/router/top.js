import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";
import JsonResult from "../utils/json-result.js";

const router = new Router();

// 获取排行榜单列表
router.get("/getTopLists", async (ctx) => {
//   const { limit = 20, page = 0, sortId = 5, categoryId = 10000000 } = ctx.query;
//   const sin = +page * +limit;
//   const ein = +limit * (+page + 1) - 1;
console.log(13);

  const params = { platform: "h5", needNewCode: 1 , ...ctx.query};
  const res = await yhttp.get("/v8/fcg-bin/fcg_myqq_toplist.fcg", {
    params,
  });
  if (res.code === 0) {
    ctx.body = JsonResult.sucess(res.data.topList);
  } else {
    ctx.body = JsonResult.error(res.message);
  }
});

export default router;
