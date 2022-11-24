import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Herodesign from '../components/Herodesign'
// import products from '../models/products'
// import mongoose from "mongoose"
import { addtshirts, gettshirts } from '../redux/slice'

const tshirts = () => {
  const dispatch=useDispatch()

  useEffect(() => {
 
    fetch("https://filmotrend-mvqr.vercel.app/api/gettshirts")
    .then((response) => response.json())
    .then((data) =>dispatch(addtshirts(data.tshirts)));
   
  }, [])
  const tshirtvalues=useSelector(gettshirts)
// console.log(tshirtvalues);
  return (

    <div className="  p-6 herodesbg  space-y-8   ">
      <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">All the trendy Tshirts of of top notch brand is out here</h2>
			<p className="font-serif text-sm dark:text-gray-400">"Flat 40% off on selected product" .</p>
		</div>
                         
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">

        {tshirtvalues.map((element) => {
            return  <Herodesign key={element._id} header={element.desc} img={element.image}  brandname={element.brand}  price={element.price} review="4.5" slug={element.slug} id={element._id}  />
        })}
    </div>
    </div> 

  )}


// export async function getServerSideProps(context) {
//   if(!mongoose.connections[0].readyState)
//     {
        
//       await mongoose.connect(process.env.MONGO_URI)
//     }
  
// let Product= await products.find()
//   return {
//     props: {allproducts: JSON.parse(JSON.stringify(Product))}, // will be passed to the page component as props
//   }
// }

export default tshirts