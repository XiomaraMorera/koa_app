const Koa = require('koa');
const app = new Koa();
const bodyPArser = require('koa-bodyparser');

const Router = require('@koa/router');
const router = new Router();

// app.use(bodyPArser());
app.use(async (ctx, next) => {
  try {
    await next()
  } catch(err) {
    console.log(ctx.response.status)
  }
});


router.get('koa-example', '/', (ctx, next) => {
  ctx.body = 'Hello this is working';
  
});

router.get('error', '/error', (ctx) => {
  ctx.status = 500;
  ctx.body = 'error';
});






app
.use(router.routes())
.use(router.allowedMethods());
  

app.listen(1200, ()=> console.log('Server listening on port 1200'));

