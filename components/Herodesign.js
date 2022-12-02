import React, { useRef, useState } from 'react'
import Link from 'next/link'


const Herodesign = (props) => {
	
	// const dispatch=useDispatch()
  // let cartdata=useSelector(getstatecartdata)
	// const [count, setCount] = useState(cartdata)
    // console.log(count);


// let cartdata=useSelector(getstatecartdata)
// console.log(cartdata);


// dispatch(addcart(cartdata))




  return (
	<article  className="flex flex-col border border-slate-400 hover:border-none  dark:bg-gray-900 shadow-xl md:mb-9 mb-5">
    
            <Link rel="noopener noreferrer" href={`/products/${props.id}`} aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-top  w-[100%] m-auto md:m-0 md:w-full h-[20rem]  md:h-[21rem] md:object-cover dark:bg-gray-500" src={props.img} />
           
            <div className="flex flex-col flex-1 p-3">
              <Link rel="noopener noreferrer" href={`/products/${props.id}`} aria-label="Te nulla oportere reprimique his dolorum"></Link> 
              <Link rel="noopener noreferrer" href={`/products/${props.id}`} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{props.brandname}</Link> 
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{props.header}</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>Price: {props.price}</span>
                <span> Review:{props.review}</span>
                {/* <span>{props.id}</span> */}
				
              </div>
			  <button type="button"   className="px-5 py-2 md:px-8 md:py-[10px] mt-[15px]  font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Learn More</h1> 
        </button>
            </div>
            </Link> 
          </article>
  )
}

export default Herodesign