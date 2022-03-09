const cron = require('node-cron');
var fs = require('fs');
eval(fs.readFileSync('connection.js')+'');    
cron.schedule(" * * * * * * ", function(err,result) {
 
    var sql = "INSERT INTO Employees (id,employee_name,employee_age,salary) values?";
    var values= [
        [null,'Vinod', '24', '8000'],
        [null,'Tanmay','22','10000'],
        [null,'Jonathan','20','12500'],
        [null,'Naman','21','14000'],
        [null, 'Animesh','26','15000'],
        [null,'Abhishek','23','11000'],
        [null,'Akshat','19','12000']
    ];     
    con.query(sql,[values],function (err, result) {  
        if (err) throw err;  
        console.log(result.affectedRows + " record(s) Inserted");  
        });  
    });

    cron.schedule(" * * * * * *", function() { 
        var sql = "UPDATE Employees SET salary= salary + '5000' WHERE salary  < 10000"; 
        con.query(sql,function (err, result) {  
            if (err) throw err;  
            console.log(result.affectedRows + " record(s) updated");  
            });  
        });


        cron.schedule(" * * * * * *", function() { 
            var sql = "DELETE FROM Employees WHERE salary > 40000";
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("Number of records deleted: " + result.affectedRows);
            });
          });