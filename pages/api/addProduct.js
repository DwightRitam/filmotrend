// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import products from "../../models/products"

const handler = async (req, res)=>{
 if(req.method == 'POST')
 {
    for(let i=0;i<req.body.length;i++){
    let p= new products({
    title:req.body[i].title,
    desc: req.body[i].desc,
    image:req.body[i].image,
    category:req.body[i].category,
    brand:req.body[i].brand,
    price:req.body[i].price,
    slug:req.body[i].slug ,
    })
    await p.save()
}
res.status (200).json({ products:{products} })
 }
 else{

     res.status (400).json({ error:"this method don' apply for this page" })
 }

}
              
export default connectDb(handler);



  