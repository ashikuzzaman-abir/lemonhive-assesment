import React from "react";
import Link from "next/link";

function ScheduleTable({ table, headings, times }) {
	return (
		<div className=' sm:w-[95vw] lg:w-fit overflow-auto'>
			<div className='table sm:w-auto lg:w-fit border-[0.25px] rounded-xl'>
				<div className='headings-rows flex w-ful l justify-between '>
					<div className=' row-gap flex flex-1 h-[70px] max-w-[200px] justify-center items-center border-zinc-100 border-solid border-[1px] '></div>
					{headings.map((heading, index) => {
						return (
							<div
								key={index}
								className=' flex flex-1 h-[70px] max-w-[200px] justify-center items-center border-zinc-100 border-solid border-[1px]'
							>
								<h3 className=' font-bold text-[16px] text-darkblue'>
									{heading}
								</h3>
							</div>
						);
					})}
				</div>
				{table.map((row, r) => {
					return (
						<div key={r} className='flex'>
							<div className='flex flex-1 h-[150px] w-[170px] justify-center items-center border-zinc-100 border-solid border-[1px]'>
								<h3 className='font-bold text-[14px] text-darkblue'>
									{times[r]}
								</h3>
							</div>
							{row.map((item, i) => {
								return (
									<div
										key={i}
										className='flex flex-1 h-[150px] w-[170px] min-w-[150px] justify-center items-center border-zinc-100 border-solid border-[1px]'
									>
										{item === null ? (
											""
										) : (
											<div className=' mx-auto'>
												<div className='text-center font-bold bg-darkBlue'>
													{item.date}
												</div>
												<Link href={`/${item.id}`}>
													<div className=' mt-2 flex flex-col justify-center gap-4 border-solid border rounded-[8px] border-chromeYellow w-[155px] h-[110px] p-4 cursor-pointer'>
														<h1 className='text-p font-bold text-brown'>
															{item.title}
														</h1>
														<p className=' text-[12px] font-regular text-[#8B6F3B]'>
															{item.duration}
														</p>
													</div>
												</Link>
											</div>
										)}
									</div>
								);
							})}
						</div>
					);
				})}

				<div></div>
			</div>
		</div>
	);
}

export default ScheduleTable;
