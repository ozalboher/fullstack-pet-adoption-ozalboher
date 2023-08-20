const db = require('../data/database');
const { hashPasswordService } = require("../services/hash.service");
const {addNewUserService ,findUserByEmailService, getUserInfoService, getUserFullNameService, updateUserWithPasswordService, updateUserService} = require("../services/users.service"); //importing the functions from the service file

const getUserFullName = async (req, res) => {
  const id = req.id; // we get the id from the request object (req.id) that we added in the app.js file
  const fullName = await getUserFullNameService(id);
  return res.status(200).send(fullName[0].firstName + " " + fullName[0].lastName);// full name is an array of objects so we need to access the first object -> and then the first and last name
};
const getUserInfo = async (req, res, next) => {
  const userId = req.id;
  try{
    const user = await getUserInfoService(userId);
    return res.status(200).send(user);
  }catch (error) {
    next(error);
}
};
const findUserByEmail = async (req, res) => {
  const email = req.params.id;
  const user = await findUserByEmailService(email);
  if (user) return res.status(400).send("Email already exist");
  return res.status(200).send("Email is available");
};
const findIfAdmin = async (req, res) => {
  const id = req.id;
  const user = await getUserInfoService(id);
  if (user[0].role === "admin") return res.status(200).send(true);
  return res.status(200).send(false);
};
const updateUser = async (req, res, next) => {
  const userId = req.id;
  const { password } = req.body;
  if(password) {
     try {
    const hashedPassword = await hashPasswordService(password);
    await updateUserWithPasswordService(userId, { ...req.body, password: hashedPassword });
    res.status(201).send("success");
  } catch (error) {return res.status(500).send("Something went wrong");}
  }
  else{
    try{
      await updateUserService(userId, req.body);
      return res.status(200).send("User updated successfully");
    }catch (error) {next(error);}
};
};

const registerUser = async (req, res) => {
  const { email, firstName, lastName, password, phoneNumber } = req.body;
  const user = await findUserByEmailService(email);
  if (user) return res.status(400).send("Email already exist");
  try {
    const hashedPassword = await hashPasswordService(password);
    addNewUserService({ email, firstName, lastName, password: hashedPassword, phoneNumber, role: "user" });
    res.status(201).send("success");
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const query = `SELECT firstName, lastName, email, phoneNumber, role FROM users`;
    const [result] = await db.query(query);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};


  


module.exports = {
  registerUser,
  getUserFullName,
  getUserInfo,
  updateUser,
  findUserByEmail,
  findIfAdmin,
  getAllUsers,
};


