import rootRouter from './root.js'
import songRouter from './song.js'
import songListRouter from './song-list.js'
import combineRouters from 'koa-combine-routers'

const router = combineRouters(
  rootRouter,
  songRouter,
  songListRouter,

)

export default router;