var connection = require('./../config');
module.exports.user_crtposts=function(req,res){
    
    let email = req.params.email;
    connection.query('SELECT * FROM crt where email=?',email,function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:email+" "+'User posts Fetched Sucessfully!.'
        })
      }
    });
}