import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
   

<section className="dark:bg-gray-800 dark:text-gray-100 herobg object-top">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
	
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl font-bold leading-none mt-[33px] sm:text-6xl text-white">Grab Your Fav Trends in  <br/> Filmy <span className='text-slate-600'>Commerce </span> 
			</h1>
			<p className="mt-6 mb-8 text-2xl sm:text-4xl sm:mb-12 text-gray-300">Your one stop shopping store
				
			</p>
		
		</div>
	</div>
</section>
  )
}

export default Hero
