import bcrypt from 'bcryptjs';

// Cần import db để tạo các kết nối đến CSDL Sequelize
import db from '../models/index';

// Khai báo kiểu thuật toán - dữ liệu mã hóa
const salt = bcrypt.genSaltSync(10);

// data hướng request từ phía client gửi lên
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);

            // Tạo mới user và lưu vào database
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            // Sau khi tạo mới xong thì trả về danh sách các user
            let listUsers = await db.User.findAll();
            resolve(listUsers);
        } catch (exception) {
            reject(exception);
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


// Lấy tất cả thông tin của người dùng
let getAllUsers = () => {
    // trả về 1 promise tức là phải chờ tao đến chi nào tao chạy xong thì chương trình mới được chạy tiếp
    return new Promise(async (resolve, reject) => {
        try {
            // thêm raw: true để lấy dữ liệu được đẹp hơn
            let users = await db.User.findAll();
            resolve(users);
        } catch (exception) {
            console.error(exception);
            reject(exception);
        }
    });
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let user = await db.User.findById(userId);
            let user = await db.User.findOne({
                where: { id: userId }
            });

            if (user) {
                resolve(user);
            } else {
                resolve([]);
            }
        } catch (exception) {
            reject(exception);
        }
    })
}

// Update thông tin của người dùng
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Tìm user trong database
            let user = await db.User.findOne({
                where: { id: data.id },
            });

            if (user) {
                // Cập nhập thông qua user.save
                await db.User.update({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    updatedAt: new Date()
                }, {
                    where: { id: data.id }
                })

                let userNew = await db.User.findAll({
                    where: { id: data.id }
                });
                resolve(userNew);
            } else {
                resolve({});
            }
        } catch (exception) {
            reject(exception);
        }
    })
}

let deleteUserData = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userDelete = await db.User.findOne({
                where: { id: userId }
            });
            if (userDelete) {
                await db.User.destroy({
                    where: { id: userId }
                });
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (exception) {
            reject(exception);
        }
    });
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserInfoById,
    updateUserData,
    deleteUserData,
}