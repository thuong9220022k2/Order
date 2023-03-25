import userService from "../services/userService"

let handleLogin = async (req,res)=>{
    let email = req.body.email
    let password = req.body.password

    if(!email || !password ){
        return res.status(500).json({
            errorCode:1,
            message:'Missing input parameter'
        })
    }

    let userData = await userService.handleUserLogin(email,password)

    return res.status(200).json({
        errorCode:userData.errCode,
        message:userData.errMessage,
        user:userData ? userData.user : []
    })
}

const handleGetAllUsers = async(req,res)=>{
    let id = req.query.id; //All, Single
    let users = await userService.getAllUsers(id);
    
    if(!id){
        return res.status(200).json({
            errorCode :1,
            errMessage:'Missing required parameters',
            users:[]
        })
    }
    return res.status(200).json({
        errorCode:0,
        errMessage:'OK',
        users
    })

}
const handleCreateNewUser = async (req,res)=>{
     let message =  await userService.createNewUser(req.body.id)  
     return res.status(200).json(message)
}

const handleUpdateUser = async (req,res)=>{
    let message = await userService.updateUser(req.body)
    return res.status(200).json(message)

}

const handleDeleteUser = async (req,res)=>{
     let message = await userService.deleteUser(req.body.id)
     return res.status(200).json(message)
}


const getAllCode = async (req,res)=>{
    try{
        let data = await userService.getAllCodeService(req.query.type)
        return res.status(200).json(data)

    }catch(err){
        console.log(err)
        return res.status(200).json({
            errorCode:-1,
            errMessage:'Error from server'
        })
    }

}
module.exports = {
    handleLogin:handleLogin,
    handleGetAllUsers:handleGetAllUsers,
    handleCreateNewUser:handleCreateNewUser,
    handleUpdateUser:handleUpdateUser,
    handleDeleteUser:handleDeleteUser,
    getAllCode:getAllCode
}