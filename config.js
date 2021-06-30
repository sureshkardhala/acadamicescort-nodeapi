var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "database4pragati.mysql.database.azure.com",
  user: "databaseadmin@database4pragati",
  password:"pragati@2021",
  database:"database4pragati",
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