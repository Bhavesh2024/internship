require('dotenv').config()
const handleLogin = async(req,res) =>{
   const data = req.body
   console.log(data);
   const USERNAME = process.env.USER;
   const PASSWORD = process.env.PASSWORD;
   const TOKEN = process.env.TOKEN;
   console.log("username : " + USERNAME);
   console.log("password : "+ PASSWORD);
   console.log("Token : "+ TOKEN);
   if(data){
     if(data.username == USERNAME){
       if(data.password == PASSWORD){
          if(data.token  == TOKEN){
                console.log('login');
                return res.status(200).json({message:"Login Successfully"});
          }else{
             return res.status(409).json({message:'Unauthorized Access'})
          }
       } else{
          return res.status(409).json({message:'Password Not Matched'})
       } 
     } else{
       return res.status(409).json({message:"Username Not Matched "});
     }
   }  
}

module.exports = handleLogin;