const express = require('express');
const { usersSchema } = require('../schema/users.schema');
const { existentUserSchema } = require('../schema/existent.user.schema');
const { validateSchema } = require('../schema/validate');
const route = express.Router();

const { registerUser, getUserFullName, getUserInfo, updateUser, findUserByEmail, findIfAdmin, getAllUsers } = require('../controllers/users.controller');
// ALL routes here assuming /users/...
route.get ('/get-name', getUserFullName);
route.get ('/get-user-info', getUserInfo);
route.get ('/find-user-email/:id', findUserByEmail);
route.get ('/find-if-admin', findIfAdmin);
route.get ('/get-all-users', getAllUsers);
route.post('/register-user', validateSchema(usersSchema), registerUser);

route.put ('/update-user',validateSchema(existentUserSchema), updateUser);


module.exports = route;