import Router from "@koa/router";
import yhttp from "../http-client/yhttp.js";
import uhttp from "../http-client/uhttp.js";
import _ from "lodash";
import dayjs from "dayjs";
import xml2json from "xml2json";
import JsonResult from "../utils/json-result.js"

const router = new Router();

// 获取歌手详情
router.get("/getSingerDesc", async (ctx) => {
  const res = await yhttp.get("/splcloud/fcgi-bin/fcg_get_singer_desc.fcg", {
    params: {
      format: "xml",
      r: dayjs().valueOf(),
      singermid: ctx.query.singermid,
    },
  });
  const dataJson = JSON.parse(xml2json.toJson(res));
  if(dataJson.result.code === "0"){
    ctx.body = JsonResult.sucess(dataJson.result.data.info);
  }else{
    ctx.body = JsonResult.error(dataJson.result.message);
  }
});

// 获取歌手专辑
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
  if(res.singer.code===0){
    ctx.body = JsonResult.sucess(res.singer.data.albumList);
  }else{
    ctx.body = JsonResult.error('暂无此歌手专辑');
  }
});

// 获取歌手专辑
router.get("/getDigitalAlbumLists", async (ctx) => {
  console.log(11111);
  
  const singermid = ctx.query.singermid;
  const num = +ctx.query.limit || 5;
  const begin = +ctx.query.page || 0;

  const params = {
    singermid,
    cmd: 'pc_index_new',
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

  const res = await yhttp.get("/v8/fcg-bin/musicmall.fcg", { params });
  ctx.body = res.data;
  if(res.code===0){
    ctx.body = JsonResult.sucess(res.data);
  }else{
    ctx.body = JsonResult.error('暂无数据');
  }
});


export default router;
