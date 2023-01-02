const mongoose = require('mongoose');

const userNoticeSchema=mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    notice:{type:String}, 
},{
    timestamps:true
});

const userNotices=mongoose.model("userNotice",userNoticeSchema);

module.exports = userNotices;