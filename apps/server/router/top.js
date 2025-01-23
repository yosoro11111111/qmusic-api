import Router from "@koa/router";
import dayjs from "dayjs";
import isoWeeks from  'dayjs/plugin/isoWeek.js';
import uhttp from "../http-client/uhttp.js";
import yhttp from "../http-client/yhttp.js";
import JsonResult from "../utils/json-result.js";

dayjs.extend(isoWeeks);

const router = new Router();

// 获取排行榜单列表
router.get("/getTopLists", async (ctx) => {
  //   const { limit = 20, page = 0, sortId = 5, categoryId = 10000000 } = ctx.query;
  //   const sin = +page * +limit;
  //   const ein = +limit * (+page + 1) - 1;
  const params = { platform: "h5", needNewCode: 1, ...ctx.query };
  const res = await yhttp.get("/v8/fcg-bin/fcg_myqq_toplist.fcg", {
    params,
  });
  if (res.code === 0) {
    ctx.body = JsonResult.sucess(res.data.topList);
  } else {
    ctx.body = JsonResult.error(res.message);
  }
});

router.get("/getRanks", async (ctx) => {
  const topId = +ctx.query.topId || 4;
  const num = +ctx.query.limit || 20;
  const offset = +ctx.query.page || 0;
  const date = ctx.query.period || dayjs();
  const week = dayjs(date).isoWeek();
  const year = dayjs(date).year();
  const period = `${year}_${week}`;
  const data = {
    comm: {
      cv: 4747474,
      ct: 24,
      needNewCode: 1,
      uin: 0,
    },
    req_1: {
      module: "musicToplist.ToplistInfoServer",
      method: "GetDetail",
      param: {
        topId,
        offset,
        num,
        period,
      },
    },
  };

  const params = {
    data: JSON.stringify(data),
  };
  const res = await uhttp.get("/", {
    params,
  });
  if (res.code === 0) {
    ctx.body = JsonResult.sucess(res.req_1.data.data);
  } else {
    ctx.body = JsonResult.error(res.message);
  }
});

export default router;
