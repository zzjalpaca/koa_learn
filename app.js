const Koa = require('koa');
const json = require('koa-json');
const koa_router = require('koa-router');
const app = new Koa();
const router = new koa_router();

app.use(json())

router.get('/test', ctx => {
  ctx.body = 'Things...'
})

app.use(router.routes()).use(router.allowedMethods())
app.use(async ctx => {
  ctx.body = {msg: "hello koa"}
})

app.listen(3000, ()=> {
  console.log('Server is staring...你好吗');
})