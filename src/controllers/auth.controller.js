const userModel = require ("../models/user.model")
const blacklistModel = require("../models/blacklist.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model");
/**
 * @name registerUserController
 * @description register a new user ,expects username ,email and password in the request body
 * @access public 
 */ 
async function registerUserController(req,res){
    const {username , email , password} = req.body;
    // 400 - invalid info 
    //401- unauthorised token/login 
    if(!username || !email || !password){
        return res.status(400).json({
            message : "Please provide username,email and password"
        })
    }
    const isUserAlreadyExists = await userModel.findOne({
        //operator - $or whats array [{conditions},{conditions}]
        $or:[
           { email },
            {username}
        ]
    })

    if(isUserAlreadyExists){
        /**
         * isUserAlreadyExist.username = username ----> check condition can be put their
         */
        return res.status(400).json({
        message : "User already exists with this user name and email"
        })
    }
    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({
        username,
        email,
        password : hash
    })

    const token = jwt.sign({
       id : user._id,
       username : user.username,
    },
    process.env.JWT_SECRET,{
        expiresIn : "1d",
    }
)

  res.cookie("token",token,{
    httpOnly: true,
    secure : false,       // must be false for HTTP (localhost)
    sameSite : "lax",    // lax allows cookies on navigation
    maxAge : 1 * 24 * 60 * 60 * 1000
  })

  res.status(201).json({
    message : "successfully Register",
    user :{
        id : user._id,
        username : user.username,
        email:user.email,
    }
  })
 }
 async function loginUserController(req,res){
    const {email , password } = req.body
    const user = await userModel.findOne({
        email
    })
    if(!user){
      return  res.status(400).json({
            message: "user does not exist "
        })
    }
    // to check whether the user password given  or password from database are same
    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message : "Invalid email, password",
        })
    }
    const token = jwt.sign({
        id : user._id,
        username : user.username,
        email : user.email
    },
        process.env.JWT_SECRET ,
        {
        expiresIn : "1d",
     }    )
 
      res.cookie("token",token,{
        httpOnly:true,
        secure:false,       // must be false for HTTP (localhost)
        sameSite:"lax",    // lax allows cookies on navigation
        maxAge:7 * 24 * 60 * 60 * 1000 
    })
    res.status(200).json({
        message:"successfully loggedIn",
        user : {
            id : user._id,
            username :user.username,
            email : user.email
        }
    })
 }
 /**
  * @name logoutUserController
  * @description clear token from user cookie and add add the token in blacklist\
  * @access public
  * **/

 async function logoutUserController(req,res){
    //taking the token from cookies 
    const token = req.cookies.token;

    if(token){
        await tokenBlacklistModel.create({token})
    }
    res.clearCookie("token")
    res.status(200).json({
        message:"User logout Successfully"
    })
 }
    /**
     * @name getMeController
  *   @description get the current logged in user details.
  *  @access public
     */
 async function getMeController(req,res){
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message : "user details is fetched successfully",
        user:{
            id : user._id,
            username : user.username,
            email : user.email }
    })
 }
module.exports = {registerUserController
    ,  loginUserController,
    logoutUserController,
    getMeController,
}  