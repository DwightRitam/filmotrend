// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import products from "../../models/products"

const handler = async (req, res)=>{
  console.log(req.query.slug);
  let sunglasses= await  products.find({category:"sunglasses"})
      
          res.status (200).json({ sunglasses })
         
} 
              
export default connectDb(handler);



  