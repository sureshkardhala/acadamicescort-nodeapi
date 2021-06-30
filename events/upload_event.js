var connection = require('./../config');
module.exports.upload_event=function(req,res){
    var event={
        "email":req.body.email,
        "name":req.body.name,
        "venue":req.body.venue,
        "timings":req.body.timings,
        "host":req.body.host,
        "image":req.body.image,
        "description":req.body.description
    }
    connection.query('INSERT INTO events SET ?',event, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Event Sucessfully uploaded!.'
        })
      }
    });
}