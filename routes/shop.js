const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	// console.log('shop.js', adminData.products);
	// res.sendFile(path.join(rootDir, 'views', 'shop.html'));
	//pug template setup
	const products = adminData.products;
	console.log(products);
	res.render('shop', { prods: products, docTitle: 'Shop', path: '/', hasProducts: products.length > 0 });
});

module.exports = router;
