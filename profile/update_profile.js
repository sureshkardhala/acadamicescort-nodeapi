var connection = require('../config');
module.exports.update_profile=function(req,res){
    
    let id=req.params.id;
    let email=req.body.email;
    let name=req.body.name;
    let image=req.body.image;
    let year=req.body.year;
    let branch=req.body.branch;
    let section=req.body.section;
    let cgpa=req.body.cgpa;

    
     connection.query('UPDATE profile SET email = ?, name= ?, year= ?, branch= ?,  image=?, section=?, cgpa=? WHERE id = ?',[email, name, year, branch, image, section, cgpa, id], function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Profile Sucessfully Updated!.'
        })
      }
    });
}