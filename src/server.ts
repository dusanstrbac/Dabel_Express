import app from './app';
import http from 'http';

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server slusa na linku: http://localhost:${port}/api`);
});
