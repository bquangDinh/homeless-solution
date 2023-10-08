"use client"

import { Typography } from "antd";
import {
	SketchOutlined,
	PlusCircleFilled
} from '@ant-design/icons'

import './style.css'

export default function TaskDetail({ params }: { params: { id: string } }) {
	return <p>
		<div className="w-screen flex flex-col justify-center items-center">
			<Typography.Title level={1} className="mt-5">
				{"McDonald's #2423"}
			</Typography.Title>
			<Typography.Text strong className='text-2xl'>
				2 free Double Chesse burgers!
			</Typography.Text>
			<div className="content-card">
				<Typography.Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Typography.Text>
			</div>
			<div className="map-card">
				<img src={'/mcdonaldmap.png'} alt="map"></img>
			</div>
			<button className="btn mt-4">Lets do this!</button>
		</div>
	</p>
}