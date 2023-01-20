const jwt = require('jsonwebtoken');
const User = require("../model/userschema");
const Admin = require("../model/adminschema");
//const userr = require('../../client/src/pages/New')
//const name = localStorage.getItem('name')
//const phone = localStorage.getItem('phone')
//const checkout = typeof window !== 'undefined' ? localStorage.getItem('phone') : null
//console.log(checkout)
const Authenticatedata = async (req, res, next ) => {
    try {
            // const token = req.cookies.jwtoken;
            // const verifyToken = jwt.verify(token, process.env.SecretKey);
            

            
            const rootUserr = await User.findOne({phone: phone});
            if (!rootUserr) {
                throw new Error('User not found')
                console.log(`not found`)
            }

            req.token = token;
            req.rootUserr = rootUserr;
            req.userID = rootUserr._id;
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
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);

    }
}


module.exports = Authenticatedata;