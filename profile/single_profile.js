var connection = require('../config');
module.exports.single_profile=function(req,res){
    
    let email = req.params.email;
    connection.query('SELECT * FROM profile where email=?',email,function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Profile Fetched Sucessfully!.'
        })
      }
    });
}