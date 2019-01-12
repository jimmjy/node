const path = require('path');

const express = require('express');

const router = express.Router();

// this is reached at /admin/add-product because we added '/admin' to route => get
router.get('/add-product', (req, res, next) => {
	res.send();
	console.log('hell');
});

// this is reached at /admin/add-product because we added '/admin' to route => post
router.post('/add-product', (req, res, next) => {
	console.log(req.body.title);
	res.redirect('/');
});

module.exports = router;
