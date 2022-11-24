import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addcart, addstatecart, getstatecartdata } from '../redux/slice'

const Herodesign = (props) => {
	
	const dispatch=useDispatch()
  let cartdata=useSelector(getstatecartdata)
	const [count, setCount] = useState(cartdata)
    // console.log(count);


// let cartdata=useSelector(getstatecartdata)
// console.log(cartdata);


// dispatch(addcart(cartdata))

const buttonhadler=()=>{
  setCount(cartdata+1)
  dispatch(addstatecart(count))
  // console.log("cartdata is" ,count)
  // console.log("butonhandler");
  dispatch(addcart(count))
}



  return (
	<article  className="flex flex-col dark:bg-gray-900 shadow-xl ">
    
            <Link rel="noopener noreferrer" href={`/products/${props.id}`} aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-top  w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] md:object-cover dark:bg-gray-500" src={props.img} />
            </Link> 
            <div className="flex flex-col flex-1 p-6">
              <Link rel="noopener noreferrer" href={`/products/${props.id}`} aria-label="Te nulla oportere reprimique his dolorum"></Link> 
              <Link rel="noopener noreferrer" href={`/products/${props.id}`} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{props.brandname}</Link> 
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{props.header}</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>{props.price}</span>
                <span>{props.review}</span>
                <span>{props.id}</span>
				
              </div>
			  <button type="button"   onClick={buttonhadler} className="px-5 py-2 md:px-8 md:py-[10px] mt-[15px]  font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Add To Cart</h1> </button>
            </div>
          </article>
  )
}

export default Herodesign