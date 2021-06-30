var connection = require('../config');
module.exports.upload_crtposts=function(req,res){
    var post={
        "email":req.body.email,
        "name":req.body.name,
        "youtube":req.body.youtube,
        "image":req.body.image,
        "category":req.body.category,
        "description":req.body.description
    }
    connection.query('INSERT INTO crt SET ?',post, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Post Sucessfully uploaded!.'
        })
      }
    });
}