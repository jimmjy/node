const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Greeting</title></head>');
		res.write(
			'<body><h1>Welcome to assignment 1</h1><form action="/create-user" method="POST"><label for="username">Username</label><input type="text" name="username" id="username"><button type="submit">Submit</button></form></body>',
		);
		return res.end();
	}

	if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Users</title></head>');
		res.write('<body><ul><li>Cate</li><li>James</li><li>Marc</li></ul></body>');
		return res.end();
	}

	if (url === '/create-user' && method === 'POST') {
		const body = [];
		req.on('data', chunk => {
			body.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const name = parsedBody.split('=')[1];
			console.log(name);
			res.statusCode = 302;
			res.setHeader('Location', '/users');
			return res.end();
		});
	}
});

server.listen(3000);
