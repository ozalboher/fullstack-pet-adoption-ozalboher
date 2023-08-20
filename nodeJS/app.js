require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const {verify} = require('./utils/jwt'); 

app.set('view engine', 'ejs'); // we set the view engine to ejs so we can use it in the res.render() function
app.use(cors({
    origin: '*'
}))

app.use(express.json()); // app.use is a middleware function that will be executed for every request to the app.

app.use((req, res, next) => {
    console.log(req.method, req.url);
    
    // if the request is with the following url, we don't need to check for a token:
    if (
        (req.method === 'POST' && req.url === '/auth/login') ||
        (req.method === 'POST' && req.url === '/users/register-user') ||
        (req.method === 'GET' && req.url === '/pets') ||
        (req.method === 'POST' && req.url === '/pets/get-filtered') 
    ) {
        console.log('next');
        return next(); 
    }
    // All other url requests, will be checked for a token:
    const token = req.headers.userid;
    const data = verify(token);

    if (!data) {
        return res.status(401).send('user not allowed')
    }

    req.id = data.id; // we add the user.id to the req object from the recieved data object (data.id)
    next();
})
app.use('/pets', require('./routes/pets.route'));
app.use('/users', require('./routes/users.route'));
app.use('/auth', require('./routes/auth.route'));

app.use((error, req, res, next) => {
    res.status(500).send(error);
})

app.listen(4000, () => {
    console.log('Express is running on port 4000');
})
