import React, { useEffect } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getstatedata, getwebtokendeails } from '../redux/slice';
import { useRouter } from 'next/router';

const Navbar = () => {
	const cartdata = useSelector(getstatedata)
  const router=useRouter();
  const [navbar, setNavbar] = useState(false);
  
  const success = localStorage.getItem('success')

  // console.log(success);
  const logout=()=>{
    localStorage.removeItem('success');
    router.push("https://filmotrend-mvqr.vercel.app")
  }
  // }, [])
  useEffect(()=>{
// console.log("success is changing");
  },[success])



  return (
    <>
      <div className='sticky'>

        <nav className="w-full  navbg shadow ">
          <div className="md:justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center md:text-center justify-between py-3 md:py-5 md:block">

                <div className="md:hidden">
                  <button
                    className="mr-4 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 navsvg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>



                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 navsvg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                      </svg>


                    )}
                  </button>
                </div>
                <Link href="/">
                  <h2 className="text-2xl Filmotrend text-white font-bold">FilmoTrend</h2>
                </Link>
                <ul className=" flex md:hidden text-red-600 items-center md:ml-6   md:space-x-1 md:space-y-0 ">

                {success && < li className="text-white p-3">
                
                <svg onClick={logout}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
  
              </li>}
              {!success && < li className="text-white p-3">
              <Link href="/login">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  </Link>
              </li>}
                  <li className="text-white p-3">
                    <Link href="/wishlist">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>

                    </Link>
                  </li>
                  <li className="text-white p-3 relative bottom-[7px]">
                    <Link href="/cart">
                      <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle hover:text-gray-700">
                        <Link href="/cart" className="relative flex">
                          <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>

                          <span className="absolute right-0 top-0 rounded-full bg-slate-700  w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartdata}
                          </span>
                        </Link>
                      </li>


                    </Link>
                  </li>


                </ul>

              </div>


            </div>
            <div>
              <div
                className={`flex-1 justify-self-center   pb-3 phoneli md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                  }`}
              >
                <ul className="  items-center md:ml-6 md:justify-between md:flex md:space-x-1 md:space-y-0 ">
                  <li className="text-white p-3 text-lg">
                    <Link href="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="text-white p-3">
                    <Link href="/products">
                      Products
                    </Link>
                  </li>

                  <li className="text-white p-3">
                    <Link href="/contact">
                      Contact

                    </Link>
                  </li>
                  <li className="text-white p-3">
                    <Link href="/beauty">
                      Beauty

                    </Link>
                  </li>
                  <li className="text-white p-3">
                    <Link href="/studio">
                      Studio

                    </Link>
                  </li>


                </ul>

              </div>

            </div>
            <ul className="hidden text-red-600 items-center md:ml-6 md:justify-between md:flex md:space-x-1 md:space-y-0 ">


              {success && < li className="text-white p-3">
                <svg onClick={logout}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                  


              </li>}
              {!success && < li className="text-white p-3">
              <Link href="/login">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  </Link>

              </li>}
              <li className="text-white p-3">
                <Link href="/wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>


                </Link>
              </li>
              <li className="text-white p-3  ">
                <Link href="/cart" className="relative flex">
                  <svg className="flex-1 w-8 h-5  fill-slate-100" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <span className="absolute right-0 top-0 rounded-full bg-slate-700 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartdata}
                  </span>



                </Link>
              </li>



            </ul>
          </div>
        </nav>

      </div>

    </>
  )

}


export default Navbar