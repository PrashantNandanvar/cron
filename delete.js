const cron = require('node-cron');
var fs = require('fs');
eval(fs.readFileSync('connection.js')+'');
  cron.schedule(" * * * * * *", function() { 
    var sql = "DELETE FROM Employees WHERE salary > 40000";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });