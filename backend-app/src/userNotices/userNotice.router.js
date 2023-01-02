const {Router} = require("express");
const Users = require("../user/user.module");
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
        const userList=await userNotices.find();
        let data=[];
        userList.map(async(u)=>{
            let uid=u.userid;
            let notice=u.notice;
            let time=u.createdAt;
            let username=await Users.findById(uid);
            let obj={
                time:time,
                username:username.username,
                notice:notice,
            }
            console.log(obj);
            data.push(obj);
        })
        res.status(200).json(data);
    }catch(err){ 
        res.status(500).send(err);
    };
});

module.exports = userNoticeRoute;