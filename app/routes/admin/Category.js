const app = require("express");
const { categoryController } = require("../../Controller/admin/categoryController");
const router = app.Router();
/**
 * @swagger
 *  components:
 *     schemas:
 *         updateCat:
 *             type: object
 *             required:
 *                 - categoryName
 *                 - oldId
 *             properties:
 *                 categoryName:
 *                     type: string
 *                     description:  the new name for update
 *                 oldId:
 *                      type: string
 *                      description: the object id for select category
 *         addCategory:
 *               type: object
 *               required:
 *                 - categoryName
 *               properties:
 *                 categoryName:
 *                      type: string
 *                      description: the category name for add
 *
 *
 *
 *
 *
 */

/**
 * @swagger
 *  /category/getAllCategories:
 *    get:
 *      tags: ["category"]
 *      summary: this api get all categorys
 *      description: this api give you all categories
 *      responses:
 *               201 :
 *                    description: success
 *               400:
 *                    description: bad  request
 *               401:
 *                    description: unauthorized
 *               500:
 *                    description: internal server error
 * */

router.get("/getAllCategories", categoryController.getAllCategores);

/**
 * @swagger
 *  /category/getCategory/{id}:
 *    get:
 *      tags: ["category"]
 *      summary: this api get all categorys
 *      description: this api give you all categories
 *      parameters:
 *       - in : path
 *         name : id
 *         required : true
 *         description: object id for search category
 *         schema:
 *         type : string
 *      responses:
 *               201 :
 *                    description: success
 *               400:
 *                    description: bad  request
 *               401:
 *                    description: unauthorized
 *               500:
 *                    description: internal server error
 * */

router.get("/getCategory/:id", categoryController.getCategoryById);
/**
 * @swagger
 *   /category/addCategory:
 *     post:
 *        tags: ["category"]
 *        summary: this api add a category
 *        description: this api add a category
 *        requestBody:
 *             required: true
 *             content:
 *                 application/x-www-form-urlencoded:
 *                   schema:
 *                      $ref: "#/components/schemas/addCategory"
 *        responses:
 *               201:
 *                   description: success
 *               401:
 *                  description: unauthorized
 *               400:
 *                  description: badrequest
 *               500:
 *                  description: internal server error
 *
 *
 * */

router.post("/addCategory", categoryController.addCategory);

/**
 * @swagger
 *   /category/removeCategory/{id}:
 *     delete:
 *        tags: ["category"]
 *        summary: this api add a category
 *        description: this api add a category
 *        parameters:
 *             -  in : path
 *                name : id
 *                description: the id for category for remove
 *                required: true
 *                schema:
 *                type: string
 *        responses:
 *               201:
 *                   description: success
 *               401:
 *                  description: unauthorized
 *               400:
 *                  description: badrequest
 *               500:
 *                  description: internal server error
 *
 *
 * */

router.delete("/removeCategory/:id", categoryController.removeCategory);
/**
 * @swagger
 *   /category/updateCategory:
 *     put:
 *        tags: ["category"]
 *        summary: this api add a category
 *        description: this api add a category
 *        requestBody:
 *             required: true
 *             content:
 *                   application/json:
 *                     schema:
 *                       $ref: "#/components/schemas/updateCat"
 *                   application/x-www-form-urlencoded:
 *                     schema:
 *                       $ref: "#/components/schemas/updateCat"
 *
 *
 *
 *        responses:
 *               201:
 *                   description: success
 *               401:
 *                  description: unauthorized
 *               400:
 *                  description: badrequest
 *               500:
 *                  description: internal server error
 *
 *
 * */

router.put("/updateCategory", categoryController.updateCategory);

module.exports = {
  categoryRotes: router,
};
