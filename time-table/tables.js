var connection = require('./../config');
module.exports.tables=function(req,res){
   
    connection.query('SELECT * FROM timetable ORDER BY id DESC',function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'All Time-table Fetched Sucessfully!.'
        })
      }
    });
}