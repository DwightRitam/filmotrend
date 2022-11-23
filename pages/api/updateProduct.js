// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import products from "../../models/products"

const handler = async (req, res)=>{
 if(req.method == 'POST')
 {
    for(let i=0;i<req.body.length;i++){
    let p= await products.findByIdAndUpdate(req.body[i]._id, req.body[i])
}
res.status (200).json({ success:"success" })
 }
 else{

     res.status (400).json({ error:"this method don' apply for this page" })
 }

}
              
export default connectDb(handler);



  