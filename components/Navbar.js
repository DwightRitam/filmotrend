import React, { useEffect } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getstatedata, getwebtokendeails } from '../redux/slice';
import { useRouter } from 'next/router';

const Navbar = () => {
  const cartdata = useSelector(getstatedata)
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  
  const [toggledclass, settoggledclass] = useState("hidden");


  const toggle = () => {
    if (toggledclass == "hidden") {
      settoggledclass("block")
    }
    else {
      settoggledclass("hidden")
    }

  }

  const success = localStorage.getItem('success')

  // console.log(success);
  const logout = () => {
    localStorage.removeItem('success');
    router.push("https://filmotrendbyritam.vercel.app")
  }
  // }, [])
  useEffect(() => {
    // console.log("success is changing");
  }, [success])



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
                  <h2 className="text-2xl Filmotrend text-white font-bold">FilmyCommerce</h2>
                </Link>
                <ul className=" flex md:hidden text-red-600 items-center md:ml-6   md:space-x-1 md:space-y-0 ">

                  {success && < li className="text-white p-3 cursor-pointer" title='log-out'>

                    <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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
                    <Link href="/contact">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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
                    <Link href="/tshirts">
                      Tshirts
                    </Link>
                  </li>
                  <li className="text-white p-3">
                    <Link href="/shirts">
                      Shirts
                    </Link>
                  </li>

                  <li className="text-white p-3">
                    <Link href="/jeans">
                      Jeans

                    </Link>
                  </li>
                  <li className="text-white p-3">
                    <Link href="/sweatshirts">
                      Sweatshirts

                    </Link>
                  </li>
                  <li className="text-white p-3">

                    <div class="p-[0.5rem]">

                      <div onClick={toggle}  class=" dropdown inline-block relative">
                        <button class="  font-semibold py-2 mt-[-9px] md:m-0 ml-[-24px] md:ml-[-25px] px-4 rounded inline-flex items-center">
                          <span class="mr-1">More </span>
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul class={`dropdown-menu absolute ${toggledclass} text-gray-700 pt-1`}>
                          <Link href='/watches'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Watches</li></Link>
                          <Link href='/blazers'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Blazers</li></Link>
                          <Link href='/sunglasses'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Sunglasses</li></Link>
                          <Link href='/sneakers'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Sneakers</li></Link>


                        </ul>
                      </div>

                    </div>
                  </li>


                </ul>

              </div>

            </div>
            <ul className="hidden text-red-600 items-center md:ml-6 md:justify-between md:flex md:space-x-1 md:space-y-0 ">


              {success && < li className="text-white p-3 cursor-pointer" title='log-out'>
                <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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
                <Link href="/contact">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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