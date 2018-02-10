const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const app = express();

// express
app.use(express.urlencoded({ extended: false }));
app.use( express.json() );
app.use(express.static(path.join(__dirname, "..", "public")));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Morgan: Logger middleware for terminal
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));

require('./api')(app);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(5110, function(){
    console.log('server has started on port 5110');
})