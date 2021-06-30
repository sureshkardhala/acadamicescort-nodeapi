var connection = require('./../config');
module.exports.users=function(req,res){
   
    connection.query('SELECT * FROM users ORDER BY id DESC',function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Complete User Detailes Fetched Sucessfully!.'
        })
      }
    });
}