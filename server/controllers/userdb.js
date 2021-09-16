const UserModel = require('../models/registermodel');


function loginapp(pemail ,ppassword, callback){
    const query = {
        email : pemail,
        password : ppassword
    }
    UserModel.findOne(query , (err,result)=>{
        callback(result);
    })
}

function signupapp(pemail ,callback){
    const query ={
        email : pemail
    }
    UserModel.findOne(query,(err,result)=>{
        callback(result); 
    })
}

function addOneapp(pname, pemail ,ppassword , callback){
    const newUser = new UserModel({
        name : pname,
        email : pemail,
        password: ppassword
    });
    newUser.save((err,item)=>{
        callback(item);
    })
}








module.exports = {
    loginapp,
    signupapp,
    addOneapp
}