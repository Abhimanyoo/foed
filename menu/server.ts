import { createServer } from 'http';
import * as next from 'next';
import routes from './routes';
import { createReadStream } from 'fs';

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(
  app,
  ({ req, res, route, query }: any) => {
    if (route.name === 'service-worker') {
      res.setHeader('content-type', 'text/javascript');
      createReadStream('./lib/serviceWorker.js').pipe(res);
    } else {
      app.render(req, res, route.page, query);
    }
  }
);

app.prepare().then(() => {
  createServer(handler).listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
