const express = require("express");
const { userController } = require("../../Controller/user/userController");
const router = express.Router();

/**
 *
 * @swagger
 *     components:
 *         schemas:
 *            login:
 *               type: object
 *               required:
 *                 - username
 *                 - password
 *               properties:
 *                     username:
 *                         type: string
 *                         description: username for lgoin
 *                     password:
 *                         type : string
 *                         description : the password for login
 *
 *            signup:
 *                 type: object
 *                 required:
 *                     - email
 *                     - username
 *                     - password
 *                 properties:
 *                     email:
 *                          type: string
 *                          description: the email for sing up
 *
 *                     username :
 *                          type: string
 *                          description: the unique username for signup
 *
 *                     password:
 *                          type : string
 *                          description: the password for login
 *
 *
 *            getUserByID:
 *                 type: object
 *                 required:
 *                    - Id
 *                 properties:
 *                     Id :
 *                       type: string
 *                       description: the object id for user
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * */

/**
 * @swagger
 *   /user/login:
 *     post:
 *       tags: ["user"]
 *       summary: login or singin
 *       description: the login api for user login
 *       requestBody:
 *           content:
 *               application/x-www-form-urlencoded:
 *                   schema :
 *                         $ref: "#/components/schemas/login"
 *               application/json:
 *                   schema :
 *                         $ref: "#/components/schemas/login"
 *       responses:
 *             201 :
 *                  description : successful
 *             401 :
 *                  description : unauthorized
 *             400 :
 *                  description : bad request
 *             500:
 *                  description : internal server error
 *
 *
 *
 * */

router.post("/login", userController.LoginUser);

/**
 * @swagger
 *    /user/signup:
 *       post :
 *           tags: ["user"]
 *           summary: the singup user
 *           description: api for signup new user
 *           requestBody:
 *               content:
 *                   application/x-www-form-urlencoded:
 *                      schema :
 *                         $ref : "#/components/schemas/signup"
 *           responses:
 *                 201 :
 *                   description: your user successfully created
 *                 400:
 *                   description: bad request
 *                 401:
 *                   description: unauthorized
 *                 500:
 *                   description: internal server error
 *
 *
 *
 *
 *
 *
 * */

router.post("/signup", userController.signup);

/**
 * @swagger
 *    /user/allUsers:
 *       get :
 *           tags: ["user"]
 *           summary: all users
 *           description: show all users
 *
 *           responses:
 *                 201 :
 *                   description: successful
 *                 400:
 *                   description: bad request
 *                 401:
 *                   description: unauthorized
 *                 500:
 *                   description: internal server error
 *
 *
 */

router.get("/allUsers", userController.getallusers);

/**
 * @swagger
 *    /user/userById:
 *       post :
 *           tags: ["user"]
 *           summary: show a user
 *           description: get user by objectId
 *           requestBody:
 *               content:
 *                   application/x-www-form-urlencoded:
 *                      schema :
 *                         $ref : "#/components/schemas/getUserByID"
 *           responses:
 *                 201 :
 *                   description: your user successfully created
 *                 400:
 *                   description: bad request
 *                 401:
 *                   description: unauthorized
 *                 500:
 *                   description: internal server error
 *
 * */

router.post("/userById", userController.getUserById);

module.exports = {
  userRoutes: router,
};
