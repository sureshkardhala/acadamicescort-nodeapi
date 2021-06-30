var connection = require('./../config');
module.exports.user_events=function(req,res){
    
    let email = req.params.email;
    connection.query('SELECT * FROM events where email=?',email,function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:email+" "+'Event Fetched Sucessfully!.'
        })
      }
    });
}