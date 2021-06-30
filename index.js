var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


//Banners

var banners=require('./banner/banners');
var uploadbanner=require('./banner/upload_banner');
var deletebanner=require('./banner/delete_banner');
var updatebanner=require('./banner/update_banner');


//user controllers
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var usersController=require('./controllers/users');
var delete_userContoller=require('./controllers/delete_users');

//CRT routes
var crtposts=require('./crt/crt_posts');
var uploadcrtpost=require('./crt/upload_crt_posts');
var updatecrtepost=require('./crt/update_crt_post');
var crtpost=require('./crt/single_crt_post');
var deletecrtpost=require('./crt/delete_crt_post');
var usercrtposts=require('./crt/user_crt_posts');
var categoryposts=require('./crt/category_crt_posts');

//Evengts routes

var allevents=require('./events/events');
var uploadevent=require('./events/upload_event');
var updateevent=require('./events/update_event');
var event=require('./events/single_event');
var deleteevent=require('./events/delete_event');
var userevent=require('./events/user_events');

//event routes
var profiles=require('./profile/profiles');
var uploadprofile=require('./profile/upload_profile');
var updateprofile=require('./profile/update_profile');
var single_profile=require('./profile/single_profile');
var deleteprofile=require('./profile/delete_profile');

//Time-table Routes

var tables=require('./time-table/tables');
var uploadtable=require('./time-table/upload_table');
var updatetable=require('./time-table/update_table');
var sinle_table=require('./time-table/single_table');
var delete_table=require('./time-table/delete_table');

/*   ************ Banner URL's**************  */

// Retrieve all banners
app.get('/api/banners',banners.banners);

// upload banner
app.post('/api/uploadbanner',uploadbanner.upload_banner);

//update banner
app.put('/api/updatebanner/:id',updatebanner.update_banner);

// delete banner
app.delete('/api/deletebanner/:id',deletebanner.delete_banner);



/*   ************ User URL's **************  */


// User Registration
app.post('/api/register',registerController.register);


// User Login
app.post('/api/login',authenticateController.authenticate);

// Retrieve all users
app.get('/api/users',usersController.users);

//delete user
app.delete('/api/deleteuser/:id',delete_userContoller.delete_users);


/*   ************ Events URL's **************  */


// Retrieve all events
app.get('/api/events',allevents.events);

// upload events
app.post('/api/uploadevent',uploadevent.upload_event);

// update evnt
app.put('/api/updateevent/:id',updateevent.update_event);

//single event
app.get('/api/event/:id',event.event);

// delete event
app.delete('/api/deleteevent/:id',deleteevent.delete_event);

// user events
app.get('/api/userevents/:email', userevent.user_events);


/*   ************ CRT URL's **************  */


//all crt posts
app.get('/api/crtposts',crtposts.crt_posts );

//upload crt post
app.post('/api/uploadcrtpost',uploadcrtpost.upload_crtposts);

//update crt post
app.put('/api/updatecrtpost/:id',updatecrtepost.update_crtpost);

//single crt post
app.get('/api/singlecrtpost/:id',crtpost.crtpost);

//user posts
app.get('/api/usercrtposts/:email',usercrtposts.user_crtposts);

//category crt posts
app.get('/api/categorycrtposts/:category',categoryposts.category_crtposts);
//delete  crtpost
app.delete('/api/deletecrtpost/:id',deletecrtpost.delete_crtpost);

/*   ************ Profile URL's **************  */


//all profiles
app.get('/api/profiles',profiles.profiles );

//upload profile
app.post('/api/uploadprofile',uploadprofile.upload_profile);

//update profile
app.put('/api/updateprofile/:id',updateprofile.update_profile);

//single profile
app.get('/api/singleprofile/:email',single_profile.single_profile);

//delete  profile
app.delete('/api/deleteprofile/:id',deleteprofile.delete_profile);


/*   ************ Time-Table URL's **************  */


// Retrieve all tables info
app.get('/api/tables', tables.tables);

// upload time-table
app.post('/api/uploadtable',uploadtable.upload_table);

// update time-table
app.put('/api/updatetable/:id',updatetable.update_table);

//single section time table
app.get('/api/table/:class',sinle_table.single_table);

// delete time-table
app.delete('/api/deletetable/:id',delete_table.delete_table);



/*   ************ Routing **************  */


app.get('/', function(req, res) {
    res.json({ message: 'API and Database Connected Suceesfully' });
});

// set port
app.listen(8080, function () {
    console.log("Node app is running on port 8080");
  });
  module.exports = app;