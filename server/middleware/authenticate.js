const jwt = require('jsonwebtoken');
const User = require("../model/userschema");
const Admin = require("../model/adminschema");


const Authenticate = async (req, res, next ) => {
    try {
            const token = req.cookies.jwtoken;
            const verifyToken = jwt.verify(token, process.env.SecretKey);

            const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token" : token });
            if (!rootUser) {
                throw new Error('User not found')
            }

            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
            console.log(`logged`)
            next();

            //  const rootAdmin = await Admin.findOne({_id: verifyToken._id, "tokens.token" : token });
            // if (!rootAdmin) {
            //     throw new Error('User not found')
            // }

            // req.token = token;
            // req.rootAdmin = rootAdmin;
            // req.AdminID = rootAdmin._id;
            // console.log(`logged`)
            // next();

    } catch (err) {
        console.log(err);
         res.send('Unauthorized: No token provided');
        
        

    }
}


module.exports = Authenticate;