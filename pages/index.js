import Head from "next/head";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import { useQuery, gql } from "@apollo/client";
// import { getAllConferences } from "../graphQL/queries";
import { useEffect, useState } from "react";

export default function Home() {
	const [table, setTable] = useState([]);
	const [times, setTimes] = useState([]);

	const [mainLoading, setMainLoading] = useState(false);
	const { data, loading, error } = useQuery(gql`
		query {
			conferences {
				id
				name
				startDate
				schedules {
					intervals {
						sessions {
							description
							day
							begin
							end
						}
					}
				}
				speakers {
					name
					aboutShort
					image {
						url
					}
				}
			}
		}
	`);
	const week = {
		0: "Sun",
		1: "Mon",
		2: "Tue",
		3: "Wed",
		4: "Thu",
		5: "Fri",
		6: "Sat",
	};

	useEffect(() => {
		// data && console.log(data.conferences);

		const getAlltimes = () => {
			const times = [];
			data?.conferences?.map((conference, i) => {
				if (conference.schedules.length !== 0) {
					const time =
						conference?.schedules[0]?.intervals[0]?.sessions[0]
							?.begin;
					if (typeof time !== "undefined") {
						if (!times.includes(time)) {
							times.push(time);
						}
					}
				}
			});
			return times;
		};
		const times = getAlltimes();
		setTimes(times);
		// console.log(times)

		function createTable() {
			setMainLoading(true);
			const matrix = [...Array(times.length)].map((e) =>
				Array(7).fill(null)
			);
			// console.log(matrix);

			data?.conferences?.map((conference, i) => {
				if (conference?.schedules?.length !== 0) {
					const time =
						conference?.schedules[0]?.intervals[0]?.sessions[0]
							?.begin;
					const day = conference?.startDate;
					const d = new Date(day);
					const dayindex = d.getDay();
					const endTime =
						conference?.schedules[0]?.intervals[0]?.sessions[
							conference?.schedules[0]?.intervals[0]?.sessions
								?.length - 1
						]?.end;
					if (day && time) {
						if (matrix[times.indexOf(time)][dayindex] === null) {
							// console.log("matrix is null")
							// console.log(times.indexOf(time));
							// console.log(dayindex);

							matrix[times.indexOf(time)][dayindex] = {
								id: conference?.id,
								date: day,
								title: conference.name,
								duration: `${time}-${endTime}`,
							};
							// console.log(
							// 	matrix[times.indexOf(time)][d.getDay(day)]
							// );
						}
					}
				}
			});
			setMainLoading(false);
			return matrix;
		}
		const matrix = createTable();
		setTable(matrix);

		// console.log(matrix)
		// console.log(data?.conferences);
	}, [data]);

	const headings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return (
		<div className=' relative w-full'>
			<Head>
				<title>Lemon Hive</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />
			<div className='h-[150px]'></div>
			<Schedule
				table={table}
				headings={headings}
				times={times}
				loading={mainLoading}
			/>
			<div className='h-[150px]'></div>

			{/* gradients */}
			<div className=' custom-gradient-2  absolute lg:top-[-50px] lg:left-0 z-10 lg:w-[490px] lg:h-[428px]'></div>
			<div className=' custom-gradient absolute sm:top-0 sm:right-0 lg:top-[-25px] lg:right-0 sm:w-[141px] sm:h-[141px] lg:w-[412px] lg:h-[412px]'></div>
			<div className='custom-gradient-3 absolute sm:w-[194px] sm:h-[192px] lg:w-[383px] lg:h-[383px] top-0 left-0 '></div>
		</div>
	);
}
