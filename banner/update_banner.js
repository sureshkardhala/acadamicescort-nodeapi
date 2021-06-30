var connection = require('./../config');
module.exports.update_banner=function(req,res){
    
        let id=req.params.id;
        let preference=req.body.preference;
        let image=req.body.image;
    
     connection.query('UPDATE banner SET image= ?, preference= ? WHERE id = ?',[image, preference, id], function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Event Sucessfully Updated!.'
        })
      }
    });
}