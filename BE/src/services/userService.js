import db from "../models/index"
import bcrypt from "bcryptjs"

var salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email,password)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let userData = {}
            let isExit = await checkUserEmail(email)
            if(isExit){

                let user = await db.User.findOne({
                    attributes:['email','roleId','password'],
                    where:{email:email},
                    raw:true
                
                })

                if(user){
                    
                     let check = bcrypt.compare(password,user.password)
                    if(check){
                        userData.errCode = 0;
                        userData.errMessage = 'oke';
                        delete user.password;
                        userData.user = user;
                     }
                     else{
                        userData.errCode = 3;
                        userData.errMessage = 'Password not invalid';
                     }

                }
                else{
                    userData.errCode = 2;
                    userData.errMessage = `User is not found`;
                }

            }
            else{
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exist in your system .Pls try other email`;
              
            }
            resolve(userData)
        } catch (error) {
            reject(error)
            
        }
    })
}


let checkUserEmail = (userEmail)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let user =  await db.User.findOne({
                 where : { email : userEmail}
            })
            if(user){
                resolve(true)
            }
            else{
                resolve(false)
            }
        } catch (error) {
            reject(error)
            
        }
    })
}


let getAllUsers = (userId)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let users = '';
            if(userId === 'All'){
                users = await db.User.findAll({
                    attributes : {
                        exclude : ['password'],
                        raw:true
                    }
                    
                })
            }
            if(userId && userId !== 'All'){
                users = await db.User.findOne({
                    where:{id : userId},
                    attributes : {
                        exclude : ['password']
                    }

                })
            }
            resolve(users)
        } catch (error) {
            reject(error)
            
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

let createNewUser = (data)=>{
    return new Promise (async (resolve,reject)=>{
        try {
            let check = await checkUserEmail(data.email)
            if(check === true){
                resolve({
                    errorCode:1,
                    message:'Email invalid'
                })
            }
            else{
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
                  resolve({
                    errorCode:0,
                    message:'OK'
                 })

            }
            
        } catch (error) {
            reject(error)
        }
    })
}

let updateUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!data.id){
                resolve({
                    errorCode:3,
                    message:'Missing parameters'
                })
            }
            let user = await db.User.findOne({
                where: { id : data.id },
                raw:false
            })
            if(!user){
                resolve({
                    errorCode:1,
                    message:'User invalid'
                })
            }
            user.firstName = data.firstName
            user.lastName = data.lastName
            user.address = data.address
            
            await user.save();
            resolve({
                errorCode:0,
                message:'Update success'
            })
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUser = (userId) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where :{ id:userId }
            })
            if(!user){
                resolve({
                    errorCode:1,
                    message:'User invalid'
                })
            }
            await db.User.destroy({
                where:{id:userId}
            })
            resolve({
                errorCode:0,
                message:'Delete Success'
            })
            
        } catch (error) {
            reject(error)
            
        }
    })
}

module.exports = {
    handleUserLogin:handleUserLogin,
    checkUserEmail:checkUserEmail,
    getAllUsers:getAllUsers,
    createNewUser:createNewUser,
    updateUser:updateUser,
    deleteUser:deleteUser,

}