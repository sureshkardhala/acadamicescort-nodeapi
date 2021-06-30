var connection = require('./../config');
module.exports.delete_event=function(req,res){
    let id=req.params.id;
    connection.query('DELETE FROM events WHERE id = ?',id, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Event Detailes Sucessfully Deleted!.'
        })
      }
    });
}