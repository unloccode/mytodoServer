const verifyUserData = require('../middlewares/verifyUserData');
const controller = require('../controllers/auth.controller');

module.exports = function(app){
    app.use(function(res, req, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/auth/signup",
        [
            verifyUserData.checkDuplicateUsernameOrEmail
        ],
        controller.signup
    );
    //app.post("/updateprofile", controller.imageUpload.single("my-image-file"), (req, res)=>{
    //    console.log("POST request received to /updateprofile");
    //    res.send("POST request received on server to /updateprofile");
    //    //get file names and save to db
    //    
    //});
    //app.post("/updateprofile", controller.imageUpload.single("my-image-file"), controller.saveprofiledata);
    app.post("/updateprofile", controller.saveprofiledata);
    app.get("/api/auth/profiler/:id", controller.pullProfileData);
    app.post("/api/user/:id", controller.confirmEmail);
    //app.get('/api/user/:id', controller.confirmEmail);
    app.post("/api/auth/writetodo", controller.writetodo);
    app.get('/api/auth/task/:id', controller.readtasks);
    app.post("/api/auth/taskdone", controller.taskDone);
    app.delete("/api/auth/taskrd/:id", controller.deleteTask);
    app.post("/api/auth/taskupdate", controller.updateTask);
    //app.get('/api/auth/task/:id', controller.userTasks);
    app.post("/test", controller.tests);
    app.post("/api/auth/signin", controller.signin);
    app.post("/api/auth/resetpassword", controller.resetpass);
    app.post("/api/reset/:id", controller.resetWatchdog);
}