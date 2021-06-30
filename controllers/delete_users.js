var connection = require('./../config');
module.exports.delete_users=function(req,res){
    var today = new Date();
    let id=req.params.id;
    connection.query('DELETE  FROM users WHERE id = ?',id, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'User Detailes Sucessfully Deleted!.'
        })
      }
    });
}