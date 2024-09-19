import mongoose , {Schema} from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        trim:true
    },
    name:{
        type:String,
        lowercase:true,
        required:true,
        trim:true,
        maxLength:40,
    },
    avatar:{
        type:String,
    },

    password:{
    type:String,
    required:[true,"Password is required"]
    }
    

},{
    timestamps:true,
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password"))return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
 return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema);