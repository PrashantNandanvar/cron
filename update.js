const cron= require('node-cron')
var fs = require('fs');
eval(fs.readFileSync('connection.js')+'');
    cron.schedule(" * * * * * *", function() { 
    var sql = "UPDATE Employees SET salary= salary + '5000' WHERE salary  < 10000"; 
    con.query(sql,function (err, result) {  
        if (err) throw err;  
        console.log(result.affectedRows + " record(s) updated");  
        });  
    });