const routers = require("express").Router();
const { user } = require("../controllers");

routers.get("/users", user.getUser);
routers.post("/register", user.register);
routers.patch("/verification", user.verifyUser);
routers.post("/verification", user.resendVerificationEmail);
routers.post("/login", user.login);
routers.get("/keepLogin", user.keepLogin);
routers.post("/forgotPassword", user.forgotPassword);
routers.patch("/resetPassword/:email", user.resetPassword);


module.exports = routers;