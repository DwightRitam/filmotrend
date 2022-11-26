// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import  cart from "../../models/cartdata"
const handler = async (req, res)=>{
         let cartvalues = await cart.find()
         res.status (200).json({ cartvalues })
}
              
export default connectDb(handler);



  