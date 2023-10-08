'use client';

import Image from 'next/image'
import './style.css'
import { Typography } from 'antd'

export default function Home() {
	return <div className='w-screen h-screen flex flex-col justify-center items-center backdrop'>
		<Typography.Title level={1}>
			Oliver
		</Typography.Title>
		<p className='text-5xl font-bold'>No More Foodwaste!</p>
		<p className='text-xl'>We help people access to food better</p>
		<button id='get-started-btn' className='mt-2'>
			<a href='/explore'>Get Started!</a>
		</button>
	</div>
}
