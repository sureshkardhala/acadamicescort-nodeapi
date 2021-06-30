var connection = require('./../config');
module.exports.banners=function(req,res){
   
    connection.query('SELECT * FROM banner ORDER BY preference ASC',function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'All Banner Images Fetched Sucessfully!.'
        })
      }
    });
}