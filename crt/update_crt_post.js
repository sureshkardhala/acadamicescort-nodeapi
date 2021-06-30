var connection = require('../config');
module.exports.update_crtpost=function(req,res){
    
    let id=req.params.id;
    let email=req.body.email;
    let name=req.body.name;
    let youtube=req.body.youtube;
    let image=req.body.image;
    let category=req.body.category;
    let description=req.body.description;

    
     connection.query('UPDATE crt SET email = ?, name= ?, youtube= ?, category= ?,  image=?, description=? WHERE id = ?',[email, name, youtube, category, image, description, id], function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Post Sucessfully Updated!.'
        })
      }
    });
}