// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import products from "../../models/products"

const handler = async (req, res)=>{
  console.log(req.query.slug);
  let productbyid= await  products.findById(req.query.slug)
      
          res.status (200).json({ productbyid })
         
} 
              
export default connectDb(handler);



  