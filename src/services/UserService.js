import db from '../models/index';
import bcrypt from 'bcrypt';

// Khai báo kiểu thuật toán - dữ liệu mã hóa
const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (userEmail, userPassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await handlerCheckEmail(userEmail);
            // TH1: Email có tồn tại -> tiếp tục kiểm tra password
            if (isExist) {
                // User có tồn tại và kiểm tra password
                // Compare password 

                let user = await db.User.findOne({
                    attributes: ["email", "password", "roleId"],
                    where: { email: userEmail }
                });

                // TH: User có tồn tại trong hệ thống -> tiếp tục kiểm tra password
                if (user) {
                    let check = bcrypt.compareSync(userPassword, user.password);
                    // TH: password trùng với password của database
                    if (check) {
                        userData.errorCode = 0;
                        userData.errorMessage = "OK";

                        // Nếu không có lỗi gì về đăng nhập thì sẽ có trả về user
                        delete user.password;
                        userData.user = user;
                    }
                    // TH: password không đúng
                    else {
                        userData.errorCode = 3;
                        userData.errorMessage = "Wrong password !";
                    }
                }
                // TH: User không tồn tại trong hệ thống
                else {
                    userData.errorCode = 2;
                    userData.errorMessage = `User's not found`;
                }
            }
            // TH2: Email không tồn tại
            else {
                userData.errorCode = 1;
                userData.errorMessage = `Your's email isn't exist in your system. Plz try other email!`;
            }

            resolve(userData);
        } catch (error) {
            reject(error);
        }
    })
}

let handlerCheckEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    })
}

// lấy tất cả danh sách user hoặc lấy user theo id
let getAllUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId && userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ["password"]
                    }
                });
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ["password"]
                    }
                });
            }
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}


// tạo mới user
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check email có tồn tại trong database hay chưa
            let checkExistEmail = await handlerCheckEmail(data.email);
            if (checkExistEmail) {
                resolve({
                    errorCode: 2,
                    errorMessage: "Your email is already in use. Plz try anothor email!"
                });
            }
            else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                // Tạo mới user và lưu vào database
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: (data.gender === '1' || data.gender === 1) ? true : false,
                    roleId: data.roleId,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });

                resolve({
                    errorCode: 0,
                    errorMessage: "Create new user success",
                });
            }
        } catch (error) {
            reject({
                errorCode: 1,
                errorMessage: "Create new user fail"
            });
        }
    });
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (exception) {
            reject(exception);
        }
    });
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            });
            if (!user) {
                resolve({
                    errorCode: 2,
                    errorMessage: `The user isn't exist`
                });
            }
            await db.User.destroy({ where: { id: userId } });
            resolve({
                errorCode: 0,
                errorMessage: `The user is deleted`
            });
        } catch (error) {
            reject(error);
        }
    });
}

// Edit user's information
let editUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // tìm user có trong database hay không theo id
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false
            });

            let message = {};
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber;
                user.gender = data.gender;
                user.roleId = data.roleId;
                data.updatedAt = new Date();

                await user.save();
                message.errorCode = 0;
                message.errorMessage = "Update done";
            } else {
                message.errorCode = 2;
                message.errorMessage = `User isn't exist in system`;
            }
            resolve(message);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    handleUserLogin,
    getAllUser,
    createNewUser,
    deleteUserById,
    editUserData,
}