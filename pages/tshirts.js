import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Herodesign from '../components/Herodesign'

import { addtshirts, gettshirts } from '../redux/slice'

const tshirts = () => {
  const dispatch=useDispatch()

  useEffect(() => {
 
    fetch("https://filmotrend-mvqr.vercel.app/api/gettshirts")
    .then((response) => response.json())
    .then((data) =>dispatch(addtshirts(data.tshirts)));
    
		
   
  }, [])
  const tshirtvalues=useSelector(gettshirts)
  
  return (

    <div className="  p-3 herodesbg  space-y-8  ">
      <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">All the trendy Tshirts of of top notch brand is out here</h2>
			<p className="font-serif text-sm dark:text-gray-400">"Flat 40% off on selected product" .</p>
		</div>
                         
    <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

        {tshirtvalues.map((element) => {
            return  <Herodesign key={element._id} header={element.desc} img={element.image}  brandname={element.brand}  price={element.price} review="4.5" slug={element.slug} id={element._id}  />
        })}
    </div>
    </div> 

  )}


export default tshirts