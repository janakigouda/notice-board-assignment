const {Router} = require("express");
const userNotices = require("./userNotice.module");

const userNoticeRoute=Router();

userNoticeRoute.post("/",async(req,res)=>{
    try{   
        const userNotice=await userNotices.create(req.body);
        res.status(200).json(userNotice);
    }catch(err){
        res.status(500).send(err);
    }
})

userNoticeRoute.get("/",async(req,res)=>{
    try{
        const userNoticList=await userNotices.aggregate([
            {
                $lookup:{
                    from:"users",
                    localField:"userid",
                    foreignField:"_id",
                    as:"user"
                }
            }
        ])
        res.status(200).send(userNoticList);
    }catch(err){ 
        res.status(500).send(err);
    };
});

module.exports = userNoticeRoute;