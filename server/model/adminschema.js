const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     email: {
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
    validationkey: {
        type: String,
        required: true
    },
    tokens : [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})



adminSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12)

    }
    next();

});

adminSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id: this._id}, process.env.SecretKey)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
}

const Admin = mongoose.model('COLLECC', adminSchema);
module.exports = Admin;
