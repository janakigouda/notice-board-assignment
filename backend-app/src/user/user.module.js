const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username:{type:String}
});

const Users=mongoose.model('user', userSchema);

module.exports =Users;