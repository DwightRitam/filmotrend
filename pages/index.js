import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';


import Hero from '../components/Hero';

export default function Home() {

	return (
		<div>
			<Head>
				<title>Ecommerce Site</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />



			</Head>

			<Hero />
			<div className="px-5 py-1  dark:bg-gray-900  smallbg dark:text-gray-100">
				<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
					<div>
						<span>Get up to 50% off your first order + free shipping,&nbsp;</span>
						<Link href="/sign_in" rel="noopener noreferrer" className="underline">sign up</Link> today!
					</div>
					<Link href="/" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
						<svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
							<path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
						</svg>
						<span className="hover:underline focus-visible:underline">Gift Cards</span>
					</Link>
				</div>
			</div>
			<section className=" secbg py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
				<div className="justify-between p-6 mx-auto space-y-8">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
						<p className="font-serif text-xl dark:text-gray-400 pt-2">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
					</div>
					<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
						<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://images.bestsellerclothing.in/data/JJ/aug-30-2022/111856004_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto" />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Jack & Jones </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest tshirts on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>599</span>
									<span>4.5</span>
								</div>
								<Link href='/tshirts'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Tshirt</h1> </button></Link>

							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://assets.ajio.com/medias/sys_master/root/20221107/tlOU/636928f0aeb269659c77426a/-473Wx593H-465246268-multi-MODEL.jpg" />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Wrangler </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest Shirts on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>999</span>
									<span>4.3</span>
								</div>
								<Link href='/shirts'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Shirt</h1> </button></Link>

							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://assets.ajio.com/medias/sys_master/root/20220129/Q8Jm/61f45296f997dd662346bf21/-473Wx593H-469097250-white-MODEL2.jpg" />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Nike </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest Sneakers on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>2599</span>
									<span>4.5</span>
								</div>
								<Link href='/sneakers'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Sneakers</h1> </button></Link>

							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/11329468_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$" />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Prada </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest sunglasses on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>3599</span>
									<span>4.5</span>
								</div>
								<Link href='/sunglasses'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Sunglasses</h1> </button></Link>

							</div>
						</article>
					</div><div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
					<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/10/105/1511/402/1/562557250/562557250_1_720x928.jpg" />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Tommy hilfigure </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest watches on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>3599</span>
									<span>4.5</span>
								</div>
								<Link href='/watches'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Watches</h1> </button></Link>

							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://imagescdn.allensolly.com/img/app/product/4/468103-3297646.jpg?auto=format" subtext="Flat 40% off on selected product" />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Allen solly </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest blazers on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>2599</span>
									<span>4.5</span>
								</div>
								<Link href='/blazers'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Blazers</h1> </button></Link>

							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16952686/2022/6/4/3ef1ada0-bb1a-4c11-af00-da518f257f2e1654336831400-BEAT-LONDON-by-PEPE-JEANS-Men-Blue-Mildly-Distressed-Light-F-1.jpg"  />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Pepe Jeans </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest jeans on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>1299</span>
									<span>4.5</span>
								</div>
								<Link href='/jeans'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Jeans</h1> </button></Link>

							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
							 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwed645536/images/hi-res/596380156/596380156_01_Front.jpg?sw=299&sh=397&ox=0&oy=0&oimg=https%3A%2F%2Fwww.levi.in%2Fdw%2Fimage%2Fv2%2FBBRC_PRD%2Fon%2Fdemandware.static%2F-%2FSites-LeviMaster-Catalog%2Fen_IN%2Fdw8806506a%2Fimages%2Fbadge%2FOnlineexclusivenewaugust.png%3Fsw%3D309%26sh%3D397" />
							 </Link> 
							<div className="flex flex-col flex-1 p-6">
								 <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"> </Link> 
								 <Link rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Levis </Link> 
								<h3 className="flex-1 py-9 md:py-0 text-lg font-semibold leading-snug">Grab out the latest Sweatshirts on top brands</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>999</span>
									<span>4.5</span>
								</div>
								<Link href='/sweatshirts'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Sweatshirts</h1> </button></Link>

							</div>
						</article>
					</div>
				</div>
			</section>

			<section className="  secbg    p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
				<div className="container grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
					<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
								<polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
								<path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
								<path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
							</svg>
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="text-3xl font-semibold leading-none">200</p>
							<p className="capitalize">Orders</p>
						</div>
					</div>
					<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
								<path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
								<path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
								<polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
								<polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
							</svg>
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="text-3xl font-semibold leading-none">7500</p>
							<p className="capitalize">New customers</p>
						</div>
					</div>
					<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
								<path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
								<rect width="32" height="32" x="80" y="264"></rect>
								<rect width="32" height="32" x="240" y="128"></rect>
								<rect width="32" height="32" x="136" y="168"></rect>
								<rect width="32" height="32" x="400" y="264"></rect>
								<path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
							</svg>
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="text-3xl font-semibold leading-none">172%</p>
							<p className="capitalize">Growth</p>
						</div>
					</div>
					<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
								<path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
							</svg>
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="text-3xl font-semibold leading-none">17%</p>
							<p className="capitalize">Bounce rate</p>
						</div>
					</div>
				</div>
			</section>


		</div>
	)
}