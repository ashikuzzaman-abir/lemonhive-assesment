import React from "react";
import Config from "../configs/main.config";
import Link from "next/link";
import Image from "next/image";

function Hero() {
	return (
		<div className=' relative w-full h-fit'>
			<div className={`max-w-[1260px] mx-auto mt-[50px] relative `}>
				<div className=' max-w-[804px] relative sm:h-fit lg:h-[700px]'>
					<h1 className=' relative z-20 text-darkblue font-bold sm:text-[48px] lg:text-h1 text-right sm:max-w-[320px] lg:max-w-[804px] sm:leading-[50px] lg:leading-[125px] sm:mr-[80px] lg:mr-0'>
						React Conference
					</h1>
					<div className=' max-w-[515px] sm:ml-0 lg:ml-auto sm:flex sm:flex-col sm:items-center lg:block sm:p-6 sm:text-center'>
						<p className=' sm:mt-[28px] lg:mt-[35px] text-shadowGrey text-p sm:text-center lg:text-justify'>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Sunt quas animi laudantium maiores quasi
							recusandae. Fugiat quia quibusdam aspernatur nihil
							ea vitae consequuntur, in nisi aliquam accusantium,
							possimus exercitationem eveniet?
						</p>
						<Link href='#'>
							<a className=' mt-[26px] flex items-center w-fit gap-2 px-[85px] py-[15px] bg-chromeYellow rounded-full justify-center cursor-pointer'>
								<p className=' text-[18px] font-medium '>
									Buy Tickets
								</p>
								<Image
									src='/assets/hero/buyTicketsArrow.svg'
									width='15'
									height='15'
									alt='Arrow'
									priority
								/>
							</a>
						</Link>
					</div>
				</div>
				<div className=' sm:absolute sm:top-[-80px] lg:top-0 sm:right-0  lg:absolute z-10 lg:bottom-[-130px] lg:right-[-180px] sm:w-[342px] sm:h-[432px] lg:w-[940px] lg:h-[832px]'>
					<Image
						src='/assets/hero/backgroundLine.svg'
						layout='fill'
						priority
						alt='background line'
					/>
				</div>
				<div className=' sm:relative lg:absolute lg:bottom-[-10px] lg:right-[-140px] z-20 sm:w-[327px] sm:h-[333px] lg:w-[549px] lg:h-[559px] sm:mx-auto sm:mt-[32px] lg:mt-0'>
					<Image
						src='/assets/hero/audience.svg'
						layout='fill'
						priority
						alt='audients'
					/>
					<div className='sm:absolute sm:bottom-[-42px] sm:right-[-20px] lg:top-absolute lg:bottom-[-65px] lg:left-[-50px] z-30 sm:w-[94px] sm:h-[94px] lg:w-[132px] lg:h-[132px]'>
						<Image
							src='/assets/hero/Star.svg'
							layout='fill'
							alt=' star'
						/>
					</div>
				</div>

				<div className=' sm:mt-[65px] sm:ml-[30px] lg:ml-0 lg:mt-0 sm:relative lg:absolute lg:bottom-0 lg:left-[-80px] z-20 sm:w-[157px] sm:h-[200px] lg:w-[330px] lg:h-[420px]'>
					<Image
						src='/assets/hero/speaker.svg'
						layout='fill'
						priority
						alt='speaker is speaking'
					/>
				</div>
				<div className=' lg:absolute sm:absolute sm:bottom-0 sm:right-0 lg:bottom-[-75px] lg:left-[150px] z-10 sm:w-[103px] sm:h-[100px] lg:w-[196px] lg:h-[189px]'>
					<Image
						src='/assets/hero/OrnamentCircle.svg'
						layout='fill'
						priority
						alt='ornaments'
					/>
				</div>
			</div>
			<div className='lg:h-[100px]'></div>
		</div>
	);
}

export default Hero;
