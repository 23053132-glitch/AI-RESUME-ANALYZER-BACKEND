const {Router}= require ("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public 
 * 
 */

authRouter.post("/register",authController.registerUserController);
/**
 * @route POST /api/auth/login
 * @description user can login using email and password
 * @access Public 
 * 
 */
authRouter.post("/login",authController.loginUserController);
/**
 *  @route GET /api/auth/logout
 * @description user can logout  and clear the token from the cookies and token in blacklist 
 * @access Public
 */
authRouter.get("/logout",authController.logoutUserController);

/**
 * @route GET/api/auth/getMe
 * @description get the current logged in user details
 * @access Private
**/
 authRouter.get("/getMe",authMiddleware.authUser,authController.getMeController);
module.exports = authRouter