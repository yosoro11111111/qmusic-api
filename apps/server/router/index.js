import topRouter from "./top.js";
import rootRouter from "./root.js";
import songRouter from "./song.js";
import singerRouter from "./singer.js";
import songListRouter from "./song-list.js";
import combineRouters from "koa-combine-routers";

const router = combineRouters(
  topRouter,
  rootRouter,
  songRouter,
  singerRouter,
  songListRouter
);

export default router;
