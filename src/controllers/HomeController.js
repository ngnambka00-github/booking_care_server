
import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
    } catch (exception) {
        console.log(exception);
    }
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('aboutpage.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

// Việc tạo user mới sẽ tốn thời gian => Cần thêm từ khóa async và await
let postCRUD = async (req, res) => {
    let listUsers = await CRUDService.createNewUser(req.body);
    return res.redirect("/get-crud");
}

// Hiển thị toàn bộ thông tin người dùng
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    return res.render("displayCRUD.ejs", {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);

        // Check user có tồn tại hay không?
        console.log("====================================");
        if (Object.keys(userData).length !== 0) {
            console.log(userData);
        } else {
            console.log("Khong tim thay user nao");
        }
        console.log("====================================");

        return res.render("editCRUD.ejs", {
            userData
        });
    }
    return res.send('User not found');
}

// Cập nhập thông tin của người dùng
let putCRUD = async (req, res) => {
    let data = req.body;
    let newUser = await CRUDService.updateUserData(data);

    return Object.keys(newUser).length !== 0 ?
        res.redirect("/get-crud") : res.send("Update failed");
}

// delete a user theo id lấy được từ path
let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    let checkDelete = await CRUDService.deleteUserData(userId);
    return checkDelete ? res.redirect("/get-crud") : res.send("Delete method");
}

// export dạng object
module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
}