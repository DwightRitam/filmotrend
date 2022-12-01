import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { addarrayofprodid, addcartdetails, addcartresponse, getaddarrayofprodid, getaddcartdetails, getallcartdata, getcartresponse, getstatecartdata, gettshirts, newallprodtotalcartdetails, newgetallprodtotalcartdetails, totalcartdetails } from '../../redux/slice'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import Link from 'next/link'



const slug = () => {
// const [showCart, setShowCart] = useState(false);
const cartdata=useSelector(newgetallprodtotalcartdetails)

const [cartItems, setCartItems] = useState(cartdata);


  let arr=window.location.pathname.split('/').slice(2)
//  console.log(arr[0])
const dispatch=useDispatch()
useEffect(() => {
 
  fetch(`https://filmotrend-mvqr.vercel.app/api/getprodbyid?slug=${arr[0]}`)
  .then((response) => response.json())
  .then((data) =>dispatch(addcartdetails(data.productbyid)));

  

 
}, [])
const cartvalues=useSelector(getaddcartdetails)
console.log(cartvalues._id);

const router=useRouter();

const [cartstate, setCartstate] = useState(false)
const addtocart=useSelector(getcartresponse)



// const  carhandler= async(id)=>{
  
//   dispatch(addcartdetails(cartvalues));

//   // const data = {
//   //   title:cartvalues.title,
//   //   desc:cartvalues.desc,
//   //   category:cartvalues.category,
//   //   brand :cartvalues.brand,
//   //   image:cartvalues.image,
//   //   image:cartvalues.image,
//   //   price: cartvalues.price,
//   //   slug:cartvalues.slug }

//   let res = await fetch("https://filmotrend-mvqr.vercel.app//api/addcartdata", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data)
//     })
//     let response = await res.json()
//     setCartstate(response.success)
//     dispatch(addcartresponse(cartstate))

   
  
//     console.log( "response is", response.success);
//     console.log( "response  after  reload is",!addtocart);



//     if(response.success==true)
//     {

//     toast.success('Your desired product has been carted', {
//       position: "bottom-left",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });
//       setTimeout(() => {
//         router.push("https://filmotrend-mvqr.vercel.app//cart")
//       }, 1000);
   
//     }
//     else{
//       toast.error(response.error, {
//         position: "bottom-left",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });
//     }

// }
const [totalPrice, setTotalPrice] = useState(0);

const carhandler=async(id,cartdata)=>{
  // console.log("carted product is is",id);
  // console.log("cartvalues are",cartdata);
  const checkProductInCart = cartItems.find((item) => item._id === cartdata._id);
  setTotalPrice((prevTotalPrice) => prevTotalPrice + cartdata.price )
  // setTotalQuanitites((prevTotalQuantities) => prevTotalQuantities + quantity);
  if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
          if (cartProduct._id === cartdata._id) return {
              ...cartProduct,
              price: cartProduct.price +cartProduct.price
          }
      })
      setCartItems(updatedCartItems)
      console.log("product already exist");
      // console.log(cartItems);

  } else {
      // product.quantity = quantity;
      setCartItems([...cartItems, { ...cartdata }]);
      // console.log(cartItems);
  }
  toast.success('Your desired product has been carted', {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

  
}
dispatch(newallprodtotalcartdetails(cartItems))

// console.log(cartItems);
// cartItems.push(cartdata)


// console.log(cartdata);





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

    <section className="text-gray-600 body-font slugbg overflow-hidden">
       <h1 className='text-center pt-[20px] pb-[10px] font-semibold text-5xl'>Product Details</h1>
       <hr className='w-[80%] m-auto'/> <br/>
       <hr className='w-[50%] m-auto pb-[25px]'/>

  <div className="container px-5  mx-auto pb-[3rem] ;
    width: 85%;">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-[40%] m-auto w-[80%] object-top h-[26rem]  md:h-[29rem]  rounded"
       src={cartvalues.image}/>
      <div className="lg:w-[58%] w-full   mt-6 lg:mt-0 p-[3.5rem] md:p-[2.5rem]" >
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{cartvalues.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{cartvalues.category}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed text-xl font-semibold">{cartvalues.desc}</p>
        <p className="leading-relaxed">100% Original Products <br/>
Pay on delivery might be available <br/>
Easy 30 days returns and exchanges <br/>
Try & Buy might be available</p>
       
        <div className="flex pt-[20px]">
          <span className="title-font font-medium text-2xl text-gray-900">Price :{cartvalues.price}</span>

          <button onClick={()=>carhandler(cartvalues._id,cartvalues)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ">Add to cart</button>

         

          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <p className="leading-relaxed font-semibold pt-[20px] "> Material Care <br/></p>
        <p className="leading-relaxed "> 95% Cotton, 5% Elastane 
 <br/></p>

      </div>
    </div>
  </div>
</section>
  
</>
  )
}


        
  

 


export default slug