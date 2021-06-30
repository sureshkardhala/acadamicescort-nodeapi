var connection = require('./../config');
module.exports.delete_banner=function(req,res){
    let id=req.params.id;
    connection.query('DELETE FROM banner WHERE id = ?',id, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Banner Detailes Sucessfully Deleted!.'
        })
      }
    });
}