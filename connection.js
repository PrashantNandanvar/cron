const mysql = require('mysql');
var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'M$p@1234',
    database : 'dbexamples'
  }); 
  con.connect(function(err) {  
    if (err) throw err;  
    console.log("Mysql Connected!");  
  });  
  