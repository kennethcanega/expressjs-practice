const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./admin.js');
const shopRoutes = require('./shop.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);