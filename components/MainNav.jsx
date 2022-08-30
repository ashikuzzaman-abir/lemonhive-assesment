import React from 'react'
import Image from 'next/image'
import Config from '../configs/main.config'

function MainNav() {
  return (
		<div className=' cursor-pointer'>
			<div
				className={`mx-auto max-w-[1320px] flex justify-between items-center px-4 py-4`}
			>
				<div className='relative sm:w-[55px] sm:h-[33px] lg:w-[135px] lg:h-[63px]'>
					<Image
						src='/assets/React5.svg'
						layout='fill'
						priority
						alt='Main Logo'
					/>
				</div>
				<div>
					<ul className='sm:hidden lg:flex flex gap-12 text-[18px] font-medium text-darkBlue'>
						<li className=' cursor-pointer'>About Us</li>
						<li className=' cursor-pointer'>What We Do</li>
						<li className=' cursor-pointer'>Our work</li>
						<li className=' cursor-pointer'>Blog</li>
						<li className=' cursor-pointer'>Say hi</li>
					</ul>
				</div>
				<div className=' relative sm:w-[16px] sm:h-[12px] lg:w-[20px] lg:h-[14px]'>
					<Image
						src='/assets/burger.png'
						layout='fill'
						priority
						alt='Burger Logo'
					/>
				</div>
			</div>
		</div>
  );
}

export default MainNav