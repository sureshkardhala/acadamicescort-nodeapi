var connection = require('./../config');
module.exports.upload_banner=function(req,res){
    
    var banner={
        "image":req.body.image,
        "preference":req.body.preference,
    }
    connection.query('INSERT INTO banner SET ?',banner, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Banner Image Sucessfully uploaded!.'
        })
      }
    });
}