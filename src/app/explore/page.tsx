import './style.css'
export default function ExplorePage(){
	return <>

	Explore page

	<div className='center'>
		<p>Dunkin donut#2345</p>
		<p>Food Bank available: 2 Chicken rolls</p>
		<div className='Task'>
		<div className = 'rectangle'>
			<button type="button">
				<a href='/explore/1'>Clear the yard for us</a>
			</button>
		</div>
		<br></br>
		<div className = 'rectangle' >
			<button type="button">
				<a href='/explore/1'>
					Take out the trash for us
				</a>
			</button>
		</div>
		</div>
	</div>
	<div className='center'>
	<p>{"McDonald's Store #2345"}</p>
		<p>Food Bank available: 1 Burger reward</p>
		<div className='Task'>
		<div className = 'rectangle'>
			<button type="button">
				<a href='/explore/2'>
				Clear the yard for us
				</a>
			</button>
		</div>
		<br></br>
		<div className = 'rectangle' >
			<button type="button">
			<a href='/explore/2'>
					Take out the trash for us
				</a>
			</button>
		</div>
		</div>
	</div>
	</>
}