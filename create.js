var fs = require('fs');
eval(fs.readFileSync('connection.js')+''); 
con.query("CREATE DATABASE js", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  