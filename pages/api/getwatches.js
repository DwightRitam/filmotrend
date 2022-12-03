// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import products from "../../models/products"

const handler = async (req, res)=>{
  console.log(req.query.slug);
  let watches= await  products.find({category:"watches"})
      
          res.status (200).json({ watches })
         
} 
              
export default connectDb(handler);



  