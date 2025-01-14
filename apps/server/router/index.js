import userRouter from './user.js'
import rootRouter from './root.js'
import combineRouters from 'koa-combine-routers'

const router = combineRouters(
  rootRouter,
  userRouter
)

export default router;