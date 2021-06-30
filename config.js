var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "yourhost",
  user: "your database username",
  password:"password",
  database:"databsename",
  port: 3306,
  ssl:true
});
connection.connect(function(err){
if(!err) {
    console.log("Pragati Database is connected Successfully!.");
} else {
    console.log("Failed to connect a Pragati Databse!.");
}
});
module.exports = connection;