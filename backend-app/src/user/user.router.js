const {Router} = require("express");
const users = require("./user.module");
const {validationResult} = require("express-validator");
const {validateUsername} = require("./validator");

const userRoute=Router();

userRoute.post("/login",[validateUsername],async(req,res)=>{
    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.send(error);
        }else{
            const user=await users.findOne({username:req.body.username});
            if(user){
                res.status(200).send(user);
            }else{
                const createUser = users.create(req.body);
                res.status(200).send(createUser);
            }
        }
    }catch(err){
        res.status(500).send(err);
    }       
});

userRoute.get("/",async(req,res)=>{
    try{
        const userList=await users.find();
        res.status(200).send(userList);
    }catch(err){
        res.status(500).send(err);
    }
})

userRoute.get("/:id",async(req,res)=>{
    try{
        let id=req.params.id;
        const userList=await users.findById(id);
        res.status(200).send(userList);
    }catch(err){
        res.status(500).send(err);
    }
})


module.exports = userRoute;