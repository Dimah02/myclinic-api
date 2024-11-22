const findService = require("../services/find_user");

async function find_user(req,res){
    try{
        const {email} = req.body;
        const found = await findService.findUser(email);
        res.json(found);
    }
    catch(error){
        res.status(401).json({message: error.message});
    }
}

module.exports = {
   find_user 
}