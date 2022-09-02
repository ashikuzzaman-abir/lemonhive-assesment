import React, { useEffect } from "react";
import ScheduleTable from "./ScheduleTable";

function Schedule({ table, times, headings, loading }) {
	return (
		<div className='w-full' id="schedule">
			<div className=' max-w-[1320px] mx-auto  p-4'>
				<div>
					<h1 className=' sm:text-[24px] lg:text-h2 font-bold text-darkB'>
						Event Schedule
					</h1>
					<p className=' text-shadowGrey mt-[16px] text-p'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quisquam velit{" "}
					</p>
				</div>
				<div className="sm:h-[35px] lg:h-[72px]"></div>
				{table.length === 0 ? (
					<div className=' text-h3 w-fit'>Loading...</div>
				) : (
					<ScheduleTable
						table={table}
						times={times}
						headings={headings}
						loading={loading}
					/>
				)}
			</div>
		</div>
	);
}

export default Schedule;
