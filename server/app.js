const express = require('express');
const app = express();
const credentials = require('./mysql_credentials');
const mysql = require('mysql');

app.get('/', function(req, res){
    res.send('hey girl hey');
    console.log('data is being received');

    const connection = mysql.createConnection(credentials);
    const query = `INSERT INTO songRequests
                        SET artistName = "", 
                            songTitle = "",
                            usersName = "",
                            usersEmail = ""`;
    console.log('this is the query: ', query);

    connection.connect(function(){
        connection.query(
            query, function(err, results, fields){
                console.log('these are the results after query argument: ', results);
            }
        );
        console.log('query has started');
    });
    console.log('got a user request');
});

app.listen(4000, function(){
    console.log('server has started on port 4000');
})