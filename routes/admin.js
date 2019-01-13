const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

// this is reached at /admin/add-product because we added '/admin' to route => get
router.get('/add-product', (req, res, next) => {
	// res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
	res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
});

// this is reached at /admin/add-product because we added '/admin' to route => post
router.post('/add-product', (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect('/');
});

// module.exports = router;

//how to do many exports rather then one
// exports.routes = router;
// exports.products = products;

//thirdway
module.exports = {
	routes: router,
	products,
};
