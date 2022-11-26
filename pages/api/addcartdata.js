// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import cart from "../../models/cartdata";
// var CryptoJS = require("crypto-js");
// const cors=require("cors")

const handler = async (req, res)=>{
    // console.log(req.body);
 if(req.method == 'POST')
 {
    // console.log(req.body)
    const {title,desc,category,brand,image,price,slug}=req.body
    let ucart= new cart({title,desc,category,brand,image,price,slug});

    await ucart.save()
res.status (200).json({success:true, ucart: ucart })
 }
 else{

     res.status (400).json({ error:"Sorry can,t be add to cart" })
 }

}
              
export default connectDb(handler);



  