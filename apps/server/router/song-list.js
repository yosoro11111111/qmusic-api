import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";
import uhttp from "../http-client/uhttp.js";
import JsonResult from "../utils/json-result.js";

const router = new Router();

// 获取歌单分类
router.get("/getSongListCategories", async (ctx, next) => {
  const res = await yhttp.get("/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg");
  
  if (res.code === 0) {
    ctx.body = JsonResult.sucess(res.data.categories);
  } else {
    ctx.body = JsonResult.error(res.message);
  }
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
  if (res.code === 0) {
    ctx.body = JsonResult.sucess(res.data.list);
  } else {
    ctx.body = JsonResult.error(res.message);
  }
});

/**
 * 获取歌单详情
 * @description: 2, 3
 * @param {page} 页数
 * @param {limit} 每页条数[20, 60]
 * @param {categoryId} 分类
 * @param {sortId} 分类
 * @return:
 */
router.get("/getSongListDetail", async (ctx) => {
  console.log('开始请求');
  
  const params = {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    new_format: 1,
    ...ctx.query,
    song_num: 10
  };
  console.log(1111, params);
  const res = await yhttp.get("/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg", {
    params,
  });
  console.log('处理返回');
  if(res.code===0){
    ctx.body = JsonResult.sucess(res.cdlist[0]);;
  }else{
    ctx.body = JsonResult.error('暂无数据');
  }

});

export default router;
