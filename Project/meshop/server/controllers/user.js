const { getAllUserData } = require("./login");

const getAllUser = async (req, res) => {
   const user = getAllUserData();
   const data = Object.values(user);
   if(data.length != 0){
    return res.status(200).json(data)
   }
   return res.status(404).end("No User Found")
};

const getUser = async (req, res) => {
  const user = getAllUserData();
  const username = req.params.username
  console.log(user);
  const isAvailableUser = Object.keys(user).includes(username)
  console.log(isAvailableUser)
  const userData = Object.values(user).filter(value => value.username == username)
  console.log(userData)
  if(isAvailableUser){
    if(userData[0].isLogin){
      return res.status(200).json(userData[0]);
    }
  }
  return res.status(404).end('Not Found');
};
const deleteUser = async (req, res) => {};
const updateUser = async (req, res) => {};

module.exports = { getAllUser, getUser, deleteUser, updateUser };
