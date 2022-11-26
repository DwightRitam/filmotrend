// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import  user from "../../models/user"
const handler = async (req, res)=>{
         let users = await user.find()
         res.status (200).json({ users })
}
              
export default connectDb(handler);



  