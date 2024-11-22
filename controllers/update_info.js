const userService = require("../services/update_info");

async function updateUserInfo(req,res){
    try{
        const userData = req.body;
        const user = await userService.updateInfo(userData);
        res.status(201).json({user:user,message:"User Updated successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    updateUserInfo
}