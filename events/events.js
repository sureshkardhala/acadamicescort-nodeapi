var connection = require('./../config');
module.exports.events=function(req,res){
   
    connection.query('SELECT * FROM events ORDER BY id DESC',function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'All Events Fetched Sucessfully!.'
        })
      }
    });
}