// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import products from "../../models/products"

const handler = async (req, res)=>{
         let product = await products.find()
         res.status (200).json({ product })
}
              
export default connectDb(handler);



  