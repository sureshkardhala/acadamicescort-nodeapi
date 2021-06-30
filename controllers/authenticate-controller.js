var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'MySQL Query Error!.'
            })
      }else{
        if(results.length >0){
            if(password==results[0].password){
                res.json({
                    status:true,
                    message:'Login Successfully Completed!.'
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and Password does not match!."
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exists in our database!."
          });
        }
      }
    });
}