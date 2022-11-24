// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import user from "../../models/user";
var CryptoJS = require("crypto-js");
// const cors=require("cors")

const handler = async (req, res)=>{
    console.log(req.body);
 if(req.method == 'POST')
 {
    console.log(req.body)
    const {name,email}=req.body
    let u= new user({name,email,password:CryptoJS.AES.encrypt(req.body.password, 'ritambhaizindabad').toString()});

    await u.save()
res.status (200).json({ success:true })
 }
 else{

     res.status (400).json({ error:"user with same email already exist" })
 }

}
              
export default connectDb(handler);



  