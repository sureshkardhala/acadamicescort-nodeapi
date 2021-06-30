var connection = require('../config');
module.exports.crt_posts=function(req,res){
   
    connection.query('SELECT * FROM crt ORDER BY id DESC',function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'All Campus Training Posts Fetched Sucessfully!.'
        })
      }
    });
}