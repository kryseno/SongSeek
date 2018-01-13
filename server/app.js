const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hey girl hey');
});

app.listen(4000, function(){
    console.log('server has started on port 4000');
})