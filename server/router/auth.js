const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userschema')
const Admin = require('../model/adminschema')
const cookieParser = require('cookie-parser')
const authenticate = require("../middleware/authenticate");
const authenticatedata = require("../middleware/aunthenticatedata");
const aunthenticateadmin = require("../middleware/aunthenticateadmin");
const authenticatementor = require("../middleware/authenticatementor");
const nodemailer = require('nodemailer');


router.use(cookieParser());
router.get('/', (req, res) => {


    res.send(`Hello world from server router`)
});



router.post('/register', async ( req, res) => {
    const {name, email, phone, age, validationkey, password, cpassword} = req.body;

    if (!name || !email || !phone || !age || !validationkey || !password || !cpassword) {
        return res.status(422).json({error: "Please fill every property"})
    }

    if (validationkey != "mahipcap7") {
        return res.status(422).json({error: "Incorrect Validation key"})
    }

    try {
        const userExist = await User.findOne({email: email });
        if (userExist) {
            return res.status(422).json({error : "Email already exists"});

        } else if (password != cpassword) {
            return res.status(422).json({error : "Password are not matching"});

        } else {
            const user = new User({name, email, phone, age, validationkey, password, cpassword});

        await user.save();
        return res.status(201).json({message: "user registered successfully"});

        }

        
    } catch (err) {
        console.log(err)
    }
    // console.log(req.body.name)  
    // return res.json({message : req.body.name});
    // res.send("my registeration");
    
    
})

router.post('/adminreg', async ( req, res) => {
    const {name, email, validationkey, password, cpassword} = req.body;

    if (!name || !email || !validationkey || !password || !cpassword) {
        return res.status(422).json({error: "Please fill every property"})
    }

     if (validationkey != "mahip/zxcv") {
        return res.status(422).json({error: "Incorrect Validation key"})
    }

    try {
        const adminExist = await Admin.findOne({email: email });
        if (adminExist) {
            return res.status(422).json({error : "Email already exists"});

        } else if (password != cpassword) {
            return res.status(422).json({error : "Password are not matching"});

        } else {
            const admin = new Admin({name, email, validationkey, password, cpassword});

        await admin.save();
        return res.status(201).json({message: "user registered successfully"});

        }

        
    } catch (err) {
        console.log(err)
    }
    // console.log(req.body.name)  
    // return res.json({message : req.body.name});
    // res.send("my registeration");
    
    
})



router.post('/signin', async (req, res) =>  {
    try {
        const {email, password } = req.body;
        if (!email || !password) {
             res.json({error: "Please fill the data"}).status(400)
             return

        }
        const userLogin = await User.findOne({email : email});
        if (userLogin) {
             const isMatch = await bcrypt.compare(password, userLogin.password);
             const token = await userLogin.generateAuthToken(); 
             console.log(token);
             res.cookie ("jwtoken", token, {
                 expires: new Date(Date.now() + 25892000000),
                 httpOnly:true
             })
              if (!isMatch) {
                  res.json({error: "Invalid credentials"}).status(400)
                  return
            
               } else {
                 res.json({message : "user signin successfully"}); 
                 return
                
        }
        
        }

        else {
             res.json({error: "Invalid credentials"}).status(400)  
             return
        }
       
        
       
    }
    catch (err) {
        console.log(`bt`)
        console.log(err);
    }
    // console.log(req.body);
})





router.get('/profile', authenticate, (req, res) => {
    console.log(`Hello from Me`);
     res.send(req.rootUser);
    

});

router.get('/profilestudent', aunthenticateadmin, (req, res) => {
    console.log(`Hello from Me`);
     res.send(req.rootAdmin);
    

});

router.get('/profilementor', authenticatementor, (req, res) => {
    console.log(`Hello from Me`);
     res.send(req.rootAdmin);
    

});





// router.post('/postcall', authenticatedata, (req, res) => {
//     console.log(`Hello from Me`);
//     res.send(req.rootUserr);


// });

router.post('/deleteuser', async (req, res) =>  {
    try {
        const {name, phone } = req.body;
        if (!name || !phone) {
            return res.status(400).json({error: "Please fill the data"})

        }
        const traineeLogin = await User.deleteOne({phone : phone});
         console.log(`successfully deleted`)

        if (traineeLogin) {
            console.log(`success perhaps not`)
            // console.log( traineeLogin._id)
            //  declare = traineeLogin

            return res.json(`Deleted`)
           
            //console.log(declare)
        //      const isMatch = await bcrypt.compare(password, adminLogin.password);
        //      const token = await adminLogin.generateAuthToken(); 
        //      console.log(token);
        //      res.cookie ("jwtoken", token, {
        //          expires: new Date(Date.now() + 25892000000),
        //          httpOnly:true
        //      })
        //       if (!isMatch) {
        //    res.status(400).json({error: "Invalid credentials"})
            
        //        } else {
        //      res.json({message : "user signin successfully"}); 
                
        // }
        
        }

        else {
            return res.status(400).json({error: "Invalid credentials"})   
        }
       
        
       
    }
    catch (err) {
        console.log(err);
    }
    // console.log(req.body);
})








module.exports = router;
