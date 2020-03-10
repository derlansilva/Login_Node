const mongoose = require("mongoose");
const validator = require("validator");
const bcript = require("bcrypt");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        validate : value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error : 'Invalid Email address'})
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

UserSchema.pre("save" ,async function(next){
    //Verificar a senha antes de salvar o usuario
    const user = this
    if(user.isModified('password')){
        user.password = await bcript.hash(user.password , 8)
    }

    next()
})

UserSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}



UserSchema.statics.finfByCredentials = async (email , password )=>{
    //Procurar usuario pro email e senha
    const user = await User.findOne({email});
    if(!user){
        throw new Error({error : "invalid login"})
    }
    const isPassWordMatch = await bcript.compare(password ,user.password);
    if(!isPassWordMatch){
        throw new Error({error : "invalid login"})
    }

    return user;
}
const User = mongoose.model("User" , UserSchema);

module.exports = User