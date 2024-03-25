const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');
const shopRoutes= require('./routes/chat')
const errorRoutes= require('./routes/error')

app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);


app.listen(4000);
