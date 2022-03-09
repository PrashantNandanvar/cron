var fs = require('fs');
eval(fs.readFileSync('connection.js')+'');
    var sql ="CREATE TABLE Employees (id INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY , employee_name VARCHAR(250) NOT NULL , employee_age VARCHAR(250) NOT NULL , salary int(10) NOT NULL)";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log('Table Created');
    });
