const {Schema,model, default: mongoose} = require('mongoose');
const bcrypt = require('bcrypt');
const { defaultUserImgPath } = require('../secret');


const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'User name is missing'],
        trim:true, // empty space remove
        minlenght:[31, 'User name should be under 31'],
        maxlenght:[31, 'User name should be under 31'],
    },
    email:{
        type:String,
        required:[true,'User email is missing'],
        trim:true, // empty space remove
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,'User password is missing'],
        minlenght:[6, 'User password should be under 31'],
        maxlenght:[13, 'User password should be under 31'],
        set:(value)=> bcrypt.hashSync(value,bcrypt.genSaltSync(10)),
        
    },
    image:{
        type:String,
        default:defaultUserImgPath
    },
    address:{
        type:String,
        require:[true,'User Address is missing'],
    },
    phone:{
        type:String,
        require:[true,'User phone is missing'],
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isBanned:{
        type:Boolean,
        default:false
    }
},
{timestamps :true}// when this data create or update
);


const User =mongoose.model('Users',userSchema)


module.exports = User;