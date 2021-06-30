var connection = require('./../config');
module.exports.upload_table=function(req,res){
    
    var event={
        "year":req.body.year,
        "branch":req.body.branch,
        "section":req.body.section,
        "class":req.body.class,
        "image":req.body.image
    }
    connection.query('INSERT INTO timetable SET ?',event, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Time-table Sucessfully uploaded!.'
        })
      }
    });
}