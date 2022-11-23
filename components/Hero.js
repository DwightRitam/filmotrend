import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
   

<section className="dark:bg-gray-800 dark:text-gray-100 herobg object-top">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
	
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl font-bold leading-none sm:text-6xl text-white">Grab Your Fav trends in  <br/> Filmo <span className='text-slate-600'>Trend </span> 
			</h1>
			<p className="mt-6 mb-8 text-2xl sm:mb-12 text-gray-300">Your one stop shopping store
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded text-white border border-white hover:bg-slate-900">Explore  More</Link> 
				<Link rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold border rounded text-blue-800 dark:border-gray-100 hover:bg-slate-900 hover:text-white">Trendy Section</Link> 
			</div>
		</div>
	</div>
</section>
  )
}

export default Hero
