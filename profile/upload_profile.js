var connection = require('../config');
module.exports.upload_profile=function(req,res){
    var post={
        "email":req.body.email,
        "name":req.body.name,
        "year":req.body.year,
        "image":req.body.image,
        "branch":req.body.branch,
        "section":req.body.section,
        "cgpa":req.body.cgpa
    }
    connection.query('INSERT INTO profile SET ?',post, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Profile Sucessfully uploaded!.'
        })
      }
    });
}