require('dotenv').config()

const { response } = require('express');
const bodyParser = require('body-parser');
const { render } = require('pug');
var cookieParser = require('cookie-parser')

var userRouter = require('./router/user.router');
var authRouter = require('./router/auth.router');

var db = require('./db');
var middleware = require('./middleWares/auth.middleware');

var express = require('express');
var app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.SECTION_SECRECT))

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');




app.get('/', function(request, response) {
    response.render('index', {
        name: 'Duc',
    });
});

app.use(express.static('public'))

app.use('/user', middleware.requiresAuth, userRouter);
app.use('/auth', authRouter);



app.listen(port, () => console.log('server listening on port ' + port));