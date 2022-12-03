import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart, getstatedata, newallprodtotalcartdetails, newgetallprodtotalcartdetails } from '../redux/slice'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import Link from 'next/link'

const cart = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	
	const newetcartdata = useSelector(newgetallprodtotalcartdetails)
	const [cartItems, setCartItems] = useState(newetcartdata);
	
	dispatch(addcart(newetcartdata.length))
	let sum = 0;
	for (let i = 0; i < newetcartdata.length; i++) {
		const element = newetcartdata[i];
		sum += element.price
	}
	
	const [TotalPrice, setTotalPrice] = useState(sum);
	

	let foundProduct;
	let index;
	let newsum;



	
	const [cartstate, setCartstate] = useState(false)

	let dummyarray=[];
	 

    const onRemove = (product) => {
		
        const newremovedCartItems = cartItems.filter((item) => item._id !==   product._id)
		dummyarray.push(newremovedCartItems)
		
		
		
		dispatch(newallprodtotalcartdetails(dummyarray[0]))
		router.reload(window.location.pathname)

		


    }



	const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id ===
            id)
        index = cartItems.findIndex((product) => product._id ===
            id);
        const newCartItems = cartItems.filter((item) => item._id !== id)
        if (value === "inc") {
	
			 newsum =foundProduct.price / foundProduct.quantity
			
			
			 setCartstate(true)
			 setCartItems([...newCartItems, {
				 ...foundProduct,
				 quantity: foundProduct.quantity + 1,
				 price:foundProduct.price + newsum
				}])
				setTotalPrice(sum+newsum)

            

        }
		 else if (value === 'dec') {
			newsum =foundProduct.price / foundProduct.quantity
            if (foundProduct.quantity > 1) {
				setCartstate(true)
                setCartItems([...newCartItems, {
                    ...foundProduct,
                    quantity: foundProduct.quantity - 1,
					price:foundProduct.price - newsum
                }])
				sum=sum- newsum
				setTotalPrice(sum)
            }
        }
    }

	if(cartstate)
	{
	  dispatch(newallprodtotalcartdetails(cartItems))
	  router.reload(window.location.pathname)



	}



	return (

		<>
			<ToastContainer

				position="bottom-left"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div className="flex flex-col cartbg m-auto  md:px-20 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
				<h2 className="text-3xl font-semibold text-center mb-10">Your cart
				</h2>

				{newetcartdata.length < 1 && (
					<div className='m-auto '>

						<img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" className='h-[15rem]' alt="" />


						<h3 className='m-auto text-2xl mt-7 text-center font-bold font-sans'>Hey, It feels so light !</h3>

						<Link href="/">
							<button type="button"
								className="border m-auto text-3xl text-pink-400 font-serif rounded-sm border-pink-500 mt-4 p-3">
								Continue Shopping
							</button>
						</Link>
					</div>
				)}

				{newetcartdata.length >= 1 && <ul className="flex flex-col divide-y divide-gray-700">
					{newetcartdata.map((element) => {
						return <li key={element._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
							<div className="flex w-full space-x-2 sm:space-x-4">
								<img className="flex-shrink-0 object-top w-20 h-24 dark:border-transparent rounded outline-none sm:w-36 sm:h-40 dark:bg-gray-500" src={element.image} alt={element.desc} />
								<span className="  rounded-full bg-slate-700 w-[2rem] h-4  p-0 relative left-[-32px] top-[-5px] text-white font-mono text-sm  leading-tight text-center">{element.quantity}
								</span>
								<div className="flex flex-col justify-between w-full pb-4">
									<div className="flex justify-between w-full pb-2 space-x-2">
										<div>
											<h3 className="text-lg font-semibold mb-2 leading-snug sm:pr-8">{element.desc}</h3>
											<p className="text-sm mb-4 dark:text-gray-400">{element.brand}</p>
										</div>
										<div className="text-right">
											<p className="text-lg font-semibold">{element.price}</p>
											<p className="text-sm line-through dark:text-gray-600">Flat 40% off on MRP</p>
										</div>
									</div>
									<div className=" mb-5 items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
										<span className="block text-xl relative top-[-7px]">Quantity :</span>
										<div className="space-x-1">
											<button title="plus quantity" type="button"
											 onClick={()=>toggleCartItemQuantity(element._id,'inc')}
											className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow bg-blue-300">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
													<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
												</svg>

											</button>
											<button title="quantity" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 relative top-[-8px] border rounded-md shadow
											bg-blue-300">
												{element.quantity}

											</button>
											{element.quantity <=1 &&  <button title="minus" type="button" 
											  onClick={()=>onRemove(element)}
											className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow bg-blue-300">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
													<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
												</svg>

											</button>}
										{element.quantity >1 &&	<button title="minus quantity" type="button" 
											 onClick={()=>toggleCartItemQuantity(element._id,'dec')}
											className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow bg-blue-300">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
													<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
												</svg>

											</button>}
										</div>
									</div>
									<div className="flex text-sm divide-x">
										<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1"
										 onClick={()=>onRemove(element)}
										 >
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
												<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
												<rect width="32" height="200" x="168" y="216"></rect>
												<rect width="32" height="200" x="240" y="216"></rect>
												<rect width="32" height="200" x="312" y="216"></rect>
												<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
											</svg>
											<a><span >Remove</span></a>
										</button>
										<button type="button" className="flex items-center px-2 py-1 space-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
												<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
											</svg>
											<span>Add to favorites</span>
										</button>
									</div>
								</div>
							</div>
						</li>
					})}


				</ul>}
				{newetcartdata.length >= 1 &&
					<div className="space-y-1 text-right">
						<p>Total amount:
							<span className="font-semibold">{TotalPrice}</span>
						</p>
						<p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
					</div>}
				{newetcartdata.length >= 1 &&
					<div className="flex justify-end space-x-4">
						<button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
							<span className="sr-only sm:not-sr-only">to shop</span>
						</button>
						<button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
							<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
						</button>
					</div>}
			</div>
		</>
	)
}

export default cart