const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin'); //import admin.js

const shopRoutes = require('./routes/shop'); //import shop.js

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//using imported files
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
	// res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
	res.status(404).render('404', { error: 'Page Not Found' });
});

app.listen(3000);
