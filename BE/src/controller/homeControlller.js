import db from "../models/index"
import CRUDService from "../services/CRUDService"
let getHomePage = async (req,res)=>{

     try {
        let data = await db.User.findAll();
        return res.render("homePage.ejs",{
            data: JSON.stringify(data),
        })
     } catch (error) {
        console.log(error);
     }
    
}

let getCRUD = async(req,res)=>{
    return res.render('crud.ejs');
}

let postCRUD = async(req,res)=>{
    let messege = await CRUDService.createNewUser(req.body);
    console.log(messege);
    return res.send('post crud from server');
}

let displayGetCRUD = async(req,res)=>{
    let data = await CRUDService.getAllUser()
    console.log('--------');
    console.log(data);
    return res.render('displayCRUD.ejs',{
        dataTable:data
    })
}

let getEditCRUD = async (req,res)=>{
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('editCRUD.ejs',{
            user:userData
        })
    }
    else{
        return res.send('Users not found')
    }
}

let putCRUD = async (req,res)=>{
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs',{
        dataTable:allUsers
    })
}

let deleteCRUD = async(req,res)=>{
    let id = req.query.id 
    if(id){
        await CRUDService.deleteUserById(id)
        return res.send('delete user succeed')
    }
    else{
        return res.send('id not exist')
    }

}

module.exports = {
    getHomePage: getHomePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD
}