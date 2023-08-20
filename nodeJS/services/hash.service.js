const bcrypt = require('bcrypt');
const saltRounds = 10; //saltRounds is the number of times the password is hashed

const hashPasswordService = async (password) => {
    try {
      const hashed = await bcrypt.hash(password, saltRounds);
      return hashed;
    } catch (err) {
      console.error('Error hashing password:', err);
      throw err; //we throw the error so that *the function* calling *this* function can catch it.
    }
  };
module.exports = {
    hashPasswordService
}