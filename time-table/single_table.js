var connection = require('./../config');
module.exports.single_table=function(req,res){
    
    let class1 = req.params.class;
    connection.query('SELECT * FROM timetable where class=?',class1,function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Table Fetched Sucessfully!.'
        })
      }
    });
}