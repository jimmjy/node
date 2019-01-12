const http = require('http');

//custom import

console.log(routes.text);

const server = http.createServer(routes.handler);

server.listen(3000);
