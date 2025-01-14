const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true
    },
     phone: {
        type: String,
        required: true
    },
     age: {
        type: String,
        required: true
    },
     validationkey: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },

    


//      physicalchart : [{
//             plank: {
//         type: String,
       
//     },
//      courtrun: {
//         type: String,
        
//     },
//      wallchair: {
//         type: String,
    
//     },
//      frogjump: {
//         type: String,
        
//     },
//     duckwalk: {
//         type: String,
       
//     },
//     date : {
//         type: Date,
//         default: Date.now
//     },
    
// }],

    tokens : [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})



userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12)

    }
    next();

});

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id: this._id}, process.env.SecretKey)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
}



const User = mongoose.model('COLLECTDB', userSchema);
module.exports = User;