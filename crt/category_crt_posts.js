var connection = require('./../config');
module.exports.category_crtposts=function(req,res){
    
    let category = req.params.category;
    connection.query('SELECT * FROM crt where category=?',category,function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:category+" "+'Posts Fetched Sucessfully!.'
        })
      }
    });
}