const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

// this is reached at /admin/add-product because we added '/admin' to route => get
router.get('/add-product', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// this is reached at /admin/add-product because we added '/admin' to route => post
router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;
