require('./models/db');
const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const bodyparser = require('body-parser');

// routes
const genController = require('./controllers/genController');

var app = express();

// view engine setup
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', expressHbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname+'/views/partials/'
}));

app.set('view engine', 'hbs');

app.listen(3000,()=>{
    console.log('\n\n NEXT STEP: Check localhost:3000 in your browser\n\n');
});

app.use('/',genController);