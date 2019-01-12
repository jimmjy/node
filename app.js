const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
	console.log('product page');
	res.send('<h1>the "add-product" page</h1>');
});

app.use('/', (req, res, next) => {
	console.log('In another middleware');
	res.send('<h1>Hello from express again!</h1>');
});

app.listen(3000);
