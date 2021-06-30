var connection = require('./../config');
module.exports.update_table=function(req,res){
    
        let id=req.params.id;
        let image=req.body.image;
        let year=req.body.year;
        let branch=req.body.branch;
        let section=req.body.section;
        let class1=req.body.class;
    
     connection.query('UPDATE timetable SET image = ?, year= ?, branch= ?, section= ?, class=? WHERE id = ?',[image, year, branch, section, class1, id], function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Time-table updated Sucessfully Updated!.'
        })
      }
    });
}