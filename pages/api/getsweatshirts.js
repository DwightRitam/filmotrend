// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import products from "../../models/products"

const handler = async (req, res)=>{
  console.log(req.query.slug);
  let sweatshirts= await  products.find({category:"sweatshirts"})
      
          res.status (200).json({ sweatshirts })
         
} 
              
export default connectDb(handler);



  