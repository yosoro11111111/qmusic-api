import Router from "@koa/router";
import dayjs from "dayjs";
import isoWeeks from "dayjs/plugin/isoWeek.js";
import uhttp from "../http-client/uhttp.js";
import yhttp from "../http-client/yhttp.js";
import JsonResult from "../utils/json-result.js";
import signTool from "../utils/sign.js";

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

  const topid = +ctx.query.topId || 4;
  const num = +ctx.query.limit || 10;
  const offset = (+ctx.query.page || 0)*num;
  const period = ctx.query.period || dayjs().format("YYYY-MM-DD");
  // const ein = +limit * (+page + 1) - 1;
  const data = {
    comm: {
      cv: 4747474,
      ct: 24,
      format: "json",
      inCharset: "utf-8",
      outCharset: "utf-8",
      notice: 0,
      platform: "yqq.json",
      needNewCode: 1,
      uin: 0,
      g_tk_new_20200303: 5381,
      g_tk: 5381,
    },
    req_1: {
      module: "musicToplist.ToplistInfoServer",
      method: "GetDetail",
      param: { topid, offset, num, period}, // 通过offset，num字段的值控制请求列表数量
    },
  };
  const dataJsonStr = JSON.stringify(data);
  const sign = signTool(dataJsonStr);
  console.log(sign);
  const res = await uhttp.post("/", dataJsonStr, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      _: new Date().getTime(),
      sign: sign,
    },
  });
  res.req_1.data.data.song.forEach((element, index) => {
    if(!element.cover){
      element.cover = `https://y.qq.com/music/photo_new/T002R300x300M000${element.albumMid}.jpg?max_age=2592000`
    }
    element['mid'] = res.req_1.data.songInfoList[index]?.mid;
  });
  ctx.body = JsonResult.sucess(res.req_1.data.data.song);
});

export default router;
