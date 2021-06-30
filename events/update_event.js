var connection = require('./../config');
module.exports.update_event=function(req,res){
    
        let id=req.params.id;
        let email=req.body.email;
        let name=req.body.name;
        let venue=req.body.venue;
        let timings=req.body.timings;
        let host=req.body.host;
        let image=req.body.image;
        let description=req.body.description;
    
     connection.query('UPDATE events SET email = ?, name= ?, host= ?, venue= ?, timings=?, image=?, description=? WHERE id = ?',[email, name, host, venue, timings, image, description, id], function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'MySQL Query Error!.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Event Sucessfully Updated!.'
        })
      }
    });
}