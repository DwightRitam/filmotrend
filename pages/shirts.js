import React, { useEffect } from 'react'
import Link from 'next/link'
import Herodesign from '../components/Herodesign'
import { useDispatch, useSelector } from 'react-redux'
import { addshirts, getshirts } from '../redux/slice'

const shirts = () => {
  const dispatch=useDispatch()

  useEffect(() => {
 
    fetch("https://filmycommerce.vercel.app/api/getShirts")
    .then((response) => response.json())
    .then((data) =>dispatch(addshirts(data.shirts)));
    
		
   
  }, [])
  const shirtvalues=useSelector(getshirts)
  console.log(shirtvalues);
  
  return (
   

    <div className="  p-3 herodesbg  space-y-8  ">
      <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold mt-[2rem]">All the trendy Shirts of of top notch brand is out here</h2>
			<p className="font-serif text-sm dark:text-gray-400">"Flat 40% off on selected product" .</p>
		</div>
                         
    <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

        {shirtvalues.map((element) => {
            return  <Herodesign key={element._id} header={element.desc} img={element.image}  brandname={element.brand}  price={element.price} review="4.5" slug={element.slug} id={element._id}  />
        })}
    </div>
    </div> 

  )}



export default shirts