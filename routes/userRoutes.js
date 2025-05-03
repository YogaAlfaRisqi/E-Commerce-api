const userRoutes = require ('express').Router()
const UserController = require('../controllers/UserController')

userRoutes.get('/', UserController.getAllUsers); // GET /users
// userRoutes.get('/:id', userController.getUserById); // GET /users/:id
// userRoutes.post('/', userController.createUser); // POST /users
// userRoutes.put('/:id', userController.updateUser); // PUT /users/:id
// userRoutes.delete('/:id', userController.deleteUser); // DELETE /users/:id


module.exports = userRoutes