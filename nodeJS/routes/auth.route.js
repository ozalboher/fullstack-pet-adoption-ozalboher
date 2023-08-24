const express = require('express');
const route = express.Router();

const { validateSchema } = require('../schema/validate');
const { authLoginSchema } = require('../schema/auth.login.schema');
const bcrypt = require('bcrypt');
const { sign } = require('../utils/jwt');
const db = require('../data/database'); // load mySQL database


route.post('/login', validateSchema(authLoginSchema), async (req, res) => {
    const { email, password } = req.body;

    const query = `SELECT id, password FROM users WHERE email = '${email}'`;
    const [userInfo] = await db.query(query);

    if (userInfo.length === 0) {
        return res.status(400).send('User Not Found');
    }
    const user = {
        id: userInfo[0].id,
        password: userInfo[0].password
    }

    bcrypt.compare(password, user.password, function (err, valid) {
        // result == true
        if (valid) {
            const data = { id: user.id };
            const token = sign(data);

            res.send({ access_token: token });
        } else {
            return res.status(400).send('Incorrect Password');
        }
    });
})

module.exports = route;