import express from 'express';
import homeController from '../controllers/HomeController';
import userController from '../controllers/UserController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);
    router.post("/put-crud", homeController.putCRUD);
    router.get("/delete-crud", homeController.deleteCRUD);

    // Giao thức chuẩn REST API
    router.post("/api/login", userController.handlerLogin);
    router.get("/api/get-all-users", userController.handlerGetAllUsers);
    router.post("/api/create-new-user", userController.handlerCreateNewUser);
    router.put("/api/edit-user", userController.handlerEditUser);
    router.delete("/api/delete-user", userController.handlerDeleteUser);

    router.get("/allcode", userController.getAllCode);

    // viết theo chuẩn rest api 
    // create -> post
    // xóa -> delete 
    // sửa thông tin -> put
    return app.use("/", router);
}

module.exports = initWebRoutes;