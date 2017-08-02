const express = require('express');
const next = require('next');
const { join } = require('path');

let dev = process.env.NODE_ENV !== 'production';
const stg = process.env.NODE_ENV === 'staging';

let env = 'dev';
let port = 3333;

if (!dev) {
  env = 'prod';
  port = 9003;
} else if (stg) {
  env = 'stg';
  port = 10003;
  dev = false;
}

const app = next({ dev });
const handler = app.getRequestHandler();

const apiRouter = require('./lib/server/router/api');

app.prepare()
  .then(() => {
    const server = express();

    const staticFilesOnRoot = [
      '/robots.txt',
      '/sitemap.xml',
      '/sw.js',
    ];

    server.get(staticFilesOnRoot, (req, res) => {
      app.serveStatic(req, res, join(__dirname, 'static', req.path));
    });

    server.use('/api', apiRouter());

    server.get('*', handler);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready [${env}] on http://localhost:${port}`);
    });
  });
