var connection = require('./../config');
module.exports.register=function(req,res){
    var users={
       
        "email":req.body.email,
        "password":req.body.password,
        "role":0
        
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'User Sucessfully registered!.'
        })
      }
    });
}