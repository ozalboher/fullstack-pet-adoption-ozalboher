# The registration + login process for a new user is as follows:

# 1. The user enters all registration form required fields.
# 2. The system checks if the user email is already taken.
# 3. The password is hashed (via bcrypt) and stored in the database along with the rest of the user information.
# 4. The user is redirected to the login page.
# 5. The user enters their email and password.
# 6. The system checks if the user email exists in the database.
# 7. The system checks if the password matches the password in the database (via bcrypt compare).
# 8. If the password matches, we generate (based on the user.id that is logging in) a JWT token via: 
```
const { sign } = require('../utils/jwt');
const token = sign({ id: user.id });
```
# 9. We then return that token back with the response to then be stored in the local storage.
# 10. Now on every new request, we take the JWT token from our localstorage, and save it in the header of the request, so that our middleware (in app.js) can use that to constantly check on each request if the token is valid. via:
```
const {verify} = require('./utils/jwt');
const token = req.headers.userid;
const data = verify(token);
```
# 11. Exclude the following routes from the middleware token verification: the route to register a new user and the route to login a user.(and more if needed)


