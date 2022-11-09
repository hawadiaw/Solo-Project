const UserController = require('../controller/user.controllers');
module.exports = (app) => {
app.post ("/api/register", UserController.registerUser)
// app.post('/login' ,UserController. loginUser) 
// app.get('/getLoggedUser' ‚UserController.getLoggedInUser), 
// app.get (' / logout' ,UserController. logoutUser)
}