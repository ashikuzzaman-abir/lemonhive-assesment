import React from 'react'
import Head from 'next/head';
import {useRouter} from "next/router";

const menu = ['Organizer', 'Speakers', 'Location', 'Schedule', 'Sponsors']

function ConferencePage() {
  const router = useRouter();
  return (
		<div>
			<Head>
				<title>Lemon Hive</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <div className=' max-w-[1320px] mx-auto'>
        <div>
          <div className=' h-[72px]'></div>
          <h2 className=' text-h2 font-bold text-darkblue'>Conference info</h2>
          <p className=' mt-[16px] text-p font-regular text-shadowGrey'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, quo assumenda, sapiente officia accusamus doloribus recusandae minima quaerat facere, neque saepe enim maiores voluptatibus amet quod alias reprehenderit autem exercitationem!</p>
          <div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
		</div>
  );
}

export default ConferencePage