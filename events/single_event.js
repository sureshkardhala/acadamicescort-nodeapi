var connection = require('./../config');
module.exports.event=function(req,res){
    
    let id = req.params.id;
    connection.query('SELECT * FROM events where id=?',id,function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Event Fetched Sucessfully!.'
        })
      }
    });
}