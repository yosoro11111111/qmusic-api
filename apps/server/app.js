import Koa from "koa";
import serve from "koa-static";
import router from './router/index.js'

const app = new Koa();

app.use(serve("./www"));
app.use(router())

// app.listen(3001, () => {  
app.listen(3001, '0.0.0.0', () => {  
  console.log('服务已经启动：http://localhost:3001');
});