'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('koa-example', '/', (ctx) => {
  ctx.body = 'Hello this is working';
});

router.get('error', '/error', (ctx) => {
  ctx.throw(500, 'internal server error');
});

router.get('status', '/status', (ctx) => {
  ctx.status = 200;
  ctx.body   = 'ok';
})

app
  .use(router.routes())
  

app.listen(1200);

