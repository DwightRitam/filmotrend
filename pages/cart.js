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
	// useEffect(() => {

	// 	fetch("https://filmotrend-mvqr-gxxkagpqk-dwightritam.vercel.app//api/getcartdetails")
	// 	.then((response) => response.json())
	// 	.then((data) =>dispatch(newallprodtotalcartdetails(data.cartvalues)));


	//   }, [])
	const newetcartdata = useSelector(newgetallprodtotalcartdetails)

	dispatch(addcart(newetcartdata.length))
	console.log(newetcartdata);
	let sum = 0;
	for (let i = 0; i < newetcartdata.length; i++) {
		const element = newetcartdata[i];
		sum += element.price
		// console.log(sum,"length is",i);
	}

	// const removecart = async (id) => {
	// 	// console.log("id is", id);

	// 	const data=[]
	// 	let res = await fetch(`https://filmotrend-mvqr-gxxkagpqk-dwightritam.vercel.app//api/deletecartdetails?slug=${id}`, {
	// 	  method: "DELETE",
	// 	  headers: {
	// 		'Content-Type': 'application/json',
	// 	  },
	// 	  body: JSON.stringify(data)
	// 	})
	// 	let response = await res.json()
	// 	// console.log(response);

	// 	if(response.success==true)
	// 	{

	// // localStorage.setItem('success',response.success)
	// 	toast.success('Item has been removed from cart successfully', {
	// 	  position: "bottom-left",
	// 	  autoClose: 3000,
	// 	  hideProgressBar: false,
	// 	  closeOnClick: true,
	// 	  pauseOnHover: true,
	// 	  draggable: true,
	// 	  progress: undefined,
	// 	  theme: "light",
	// 	  });
	// 	  setTimeout(() => {
	// 		router.reload(window.location.pathname)
	// 	  }, 1000);
	// 	}
	// 	else{
	// 	  toast.error(response.error, {
	// 		position: "bottom-left",
	// 		autoClose: 1000,
	// 		hideProgressBar: false,
	// 		closeOnClick: true,
	// 		pauseOnHover: true,
	// 		draggable: true,
	// 		progress: undefined,
	// 		theme: "light",
	// 		});
	// 	}
	//   }

	let foundProduct;
	const onRemove = (product) => {
		foundProduct = newetcartdata.find((item) => item._id ===
			product._id)
		const newCartItems = newetcartdata.filter((item) => item._id !== product._id)
		// setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
		sum = sum - product.price
		// setTotalQuanitites(prevTotalQuantities =>
		//     prevTotalQuantities - foundProduct.quantity)
		//     setCartItems(newCartItems)
		dispatch(newallprodtotalcartdetails(newCartItems))
		console.log(product);


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
						
						<img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" className='h-[15rem]' alt=""/>

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
								<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={element.image} alt={element.desc} />
								<div className="flex flex-col justify-between w-full pb-4">
									<div className="flex justify-between w-full pb-2 space-x-2">
										<div className="space-y-1">
											<h3 className="text-lg font-semibold leading-snug sm:pr-8">{element.desc}</h3>
											<p className="text-sm dark:text-gray-400">{element.brand}</p>
										</div>
										<div className="text-right">
											<p className="text-lg font-semibold">{element.price}</p>
											<p className="text-sm line-through dark:text-gray-600">Flat 40% off on MRP</p>
										</div>
									</div>
									<div className="flex text-sm divide-x">
										<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
												<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
												<rect width="32" height="200" x="168" y="216"></rect>
												<rect width="32" height="200" x="240" y="216"></rect>
												<rect width="32" height="200" x="312" y="216"></rect>
												<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
											</svg>
											<a><span onClick={() => onRemove(element)} >Remove</span></a>
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
				{ newetcartdata.length >= 1 && 
				<div className="space-y-1 text-right">
					<p>Total amount:
						<span className="font-semibold">{sum}</span>
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