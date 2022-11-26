// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import cart from "../../models/cartdata"

const handler = async (req, res)=>{

 if(req.method == 'DELETE')
 {
     console.log("deleteid is" ,req.query.slug);
    
    let cartdelete= await cart.findByIdAndDelete(req.query.slug)
     res.status (200).json({"success":true ,cartdelete:cartdelete})
 }
 else{
     res.status (400).json({ error:"this method don' apply for this page" })
 }

}
              
export default connectDb(handler);



  