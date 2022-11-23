// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import user from "../../models/user";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res)=>{
    

 if(req.method == 'POST')


 {
    console.log(req.body)
    let uauth=await user.findOne({"email": req.body.email})
    
    
    if(uauth){
        let bytes  = CryptoJS.AES.decrypt(uauth.password, 'ritambhaizindabad');
        let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        if(req.body.email == uauth.email && req.body.password == decryptedData)
        {
            var token = jwt.sign({email: uauth.email, name: uauth.name }, 'jwtsecrettoken',{
                expiresIn:"2d"
            });

            res.status (200).json({ success:true,token})
        }
        else{

            res.status (400).json({ success:false,error: "Invalid Credentials" })
        }
    }
    else{
        res.status (400).json({ success:false,error: "user not found" })

    }
   
    
}
else{
    
    res.status (400).json({ error:"this method don' apply for this page" })
}

}
              
export default connectDb(handler);



  