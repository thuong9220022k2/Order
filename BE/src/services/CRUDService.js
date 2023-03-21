var bcrypt = require('bcryptjs');
import db from "../models/index"
var salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) =>{
    return new Promise(async(resolve,reject)=>{
         try {
            let hassPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email:data.email,
                password:hassPasswordFromBcrypt,
                firstName: data.firstname,
                lastName: data.lastname,
                address:data.address,
                gender:data.gender === '1' ? true :false,
                roleId:data.roleId,
                phonenumber:data.phonenumber,
                positionId:data.positionId,
            })
            resolve('oke create a new user success')
         } catch (e) {
            reject(e)
            
         }
    })

}

let hashUserPassword = (password) =>{
    return new Promise( async (resolve,reject)=>{
        try {
            var hashPassword = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users = db.User.findAll({
                raw:true
            })
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

let getUserInfoById = (userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where:{id:userId},
                raw:true
            })
            if(user){
                resolve(user)
            }
            else{
                resolve([])
            }
        } catch (error) {
            reject(error)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: { id : data.id }
            })
            if(user){
                user.firstName = data.firstName //firstName
                user.lastName = data.lastName
                user.address = data.address
                
                await user.save();

                let allUsers = await db.User.findAll();

                resolve(allUsers)
            }
            else{
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUserById = (userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where:{id:userId}
            })

            if(user){
                user.destroy();
            }
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewUser:createNewUser,
    getAllUser:getAllUser,
    getUserInfoById:getUserInfoById,
    updateUserData:updateUserData,
    deleteUserById:deleteUserById
}