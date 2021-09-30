
import UserService from '../services/UserService';

let handlerLogin = async (req, res) => {
    let { email, password } = req.body;

    // check email người dùng có tồn tại hay không?
    // so sánh password người dùng truyền vào có hợp lệ hay không?
    if (!email || !password) {
        return res.status(500).json({
            errorCode: 1,
            errorMessage: "Missing inputs parameter!",
            user: {}
        });
    }

    // Nếu trả về errorCode = 0 => Nếu người dùng đăng nhập thành công
    // errorCode: 0,
    // message: "Hello world",
    // yourEmail: email,
    // password: password,
    let userData = await UserService.handleUserLogin(email, password);
    // Nếu có lỗi thì trả về 500
    // Nếu không có lỗi sẽ trả về kèm theo data và status 200
    return res.status(userData.user ? 200 : 500).json({
        errorCode: userData.errorCode,
        errorMessage: userData.errorMessage,
        user: userData.user ? userData.user : {}
    });
}

// Lấy tất cả thông tin của người dùng
let handlerGetAllUsers = async (req, res) => {
    let userId = req.query.userId; // all or id
    if (!userId) {
        return res.status(500).json({
            errorCode: 1,
            errorMessage: "Missing required parameter",
            users: []
        });
    }
    let users = await UserService.getAllUser(userId);

    return res.status(200).json({
        errorCode: 0,
        errorMessage: "OK",
        users: users
    });
}

// API tạo mới user
let handlerCreateNewUser = async (req, res) => {
    let message = await UserService.createNewUser(req.body);
    return res.status(200).json(message);
}

// API sửa thông tin user 
let handlerEditUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(500).json({
            errorCode: 1,
            errorMessage: "Missing require parameter"
        })
    }

    let message = await UserService.editUserData(req.body);
    return res.status(200).json(message);
}

// API delete user
let handlerDeleteUser = async (req, res) => {
    if (!req.body.userId) {
        return res.status(500).json({
            errorCode: 1,
            errorMessage: "Missing required parameter"
        });
    }
    let message = await UserService.deleteUserById(req.body.userId);
    return res.status(200).json(message);
}

module.exports = {
    handlerLogin,
    handlerGetAllUsers,
    handlerCreateNewUser,
    handlerEditUser,
    handlerDeleteUser,
}