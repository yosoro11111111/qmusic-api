import Koa from "koa";
import router from './router/index.js'

const app = new Koa();

app.use(router())
app.listen(3001, () => {  
  console.log('服务已经启动：http://localhost:3001');
});