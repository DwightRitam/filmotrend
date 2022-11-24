import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setwebtoken } from '../redux/slice';
const sign_in = () => {
  const router=useRouter();
  const dispatch=useDispatch();
 
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handlechange=(e)=>{
    
    if(e.target.name == "email")
    {
      setEmail(e.target.value)
    }
    else if(e.target.name == "password")
    {
      setPassword(e.target.value)
    }

  }

  const handlesubmit=async (e)=>{
    e.preventDefault();
    const data={email,password}

    

    let res= await fetch("https://filmotrend-mvqr.vercel.app/api/signin",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    let response=await res.json()
    // console.log(response);
    // dispatch(setwebtoken(response))
    setEmail('')
    setPassword('')
    if(response.success==true)
    {
localStorage.setItem('token',response.token)
localStorage.setItem('success',response.success)
    toast.success('You successfully logged in', {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        router.push("https://filmotrend-mvqr.vercel.app")
      }, 1000);
    }
    else{
      toast.error(response.error, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
   
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
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16  loginbg mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
    <div className="flex flex-col justify-between">
      <h2 className='text-center font-semibold md:hidden text-[3rem]' > Sign in</h2>
      <img src="https://media.giphy.com/media/ogOYK1OW3FLz7OdAgp/giphy.gif" alt="" className="hidden md:flex  h-[21rem] lg:h-[25rem] md:relative md:left-[-35px] md:bottom-[2rem] md:h-[33rem] w-[35rem] sm:w-[35rem] sm:m-auto " />
    </div>
    <form onSubmit={handlesubmit} novalidate="" className="space-y-6 md:m-[128px] w-[67%] m-auto ng-untouched ng-pristine ng-valid">
      
    <div>
        <label for="email" className="text-sm">Email</label>
        <input onChange={handlechange} value={email} id="email" name='email' type="email" placeholder='abc@gmail.com'  className="w-full p-3 rounded dark:bg-gray-800" />
      </div>
      <div>
        <label for="password" className="text-sm">password</label>
        <input onChange={handlechange} value={password} id="password" name='password' type="password" placeholder='***********' className="w-full p-3 rounded dark:bg-gray-800" />
      </div>
      
    
      <div className="space-y-2">
			<div>
				
      <button type="submit" className="w-full border border-slate-700  p-4 hover:bg-slate-700 hover:text-white text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Sign in</button>
			</div>
			<p className="px-6 py-2 text-sm text-center dark:text-gray-400">Don't had a acoount yet !
			<Link href='/login'> <span  className="hover:underline text-blue-900 dark:text-violet-400">  Login</span> </Link>	
			</p>
		</div>
    </form>
  </div>
  </>
  )
}

export default sign_in