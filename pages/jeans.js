import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Herodesign from '../components/Herodesign'

import { addjeans, addtshirts, getjeans, gettshirts } from '../redux/slice'

const jeans = () => {
  const dispatch=useDispatch()

  useEffect(() => {
 
    fetch("https://filmotrendbyritam.vercel.app/api/getjeans")
    .then((response) => response.json())
    .then((data) =>dispatch(addjeans(data.jeans)));
    
		
   
  }, [])
  const jeansvalues=useSelector(getjeans)
  // console.log(jeansvalues);
  
  return (

    <div className="  p-3 herodesbg  space-y-8  ">
      <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold mt-[2rem]">All the trendy Jeans of of top notch brand is out here</h2>
			<p className="font-serif text-sm dark:text-gray-400">"Flat 40% off on selected product" .</p>
		</div>
                         
    <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

        {jeansvalues.map((element) => {
            return  <Herodesign key={element._id} header={element.desc} img={element.image}  brandname={element.brand}  price={element.price} review="4.5" slug={element.slug} id={element._id}  />
        })}
    </div>
    <h2 className='text-center text-2xl '> It Seems it ends here !</h2>

    <hr className='  w-[85%] m-auto' />
    <hr className='  w-[45%] pb-[10px] m-auto' />
    </div> 

  )}


export default jeans