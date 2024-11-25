const findService = require("../services/get_doctor");

async function get_doctor(req,res){
    try{
        const { id } = req.params;
        const found = await findService.getDoctor(id);
        res.json(found);
    }
    catch(error){
        res.status(401).json({message: error.message});
    }
}

module.exports = {
     get_doctor 
}