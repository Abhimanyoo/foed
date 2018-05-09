import { createServer } from 'http';
import * as next from 'next';
import routes from './routes';

const PORT = 3000 || process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
