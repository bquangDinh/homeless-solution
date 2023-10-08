import './style.css'
export default function ExplorePage(){
	return <>
	
	Explore page

	<div className='center'>
		<p>Dunkin donut#2345</p>
		<p>Food Bank available: 2 Chicken rolls</p>
		<div className='Task'>
		<div className = 'rectangle'>
			<button type="button">Clear the yard for us</button>
		</div>
		<br></br>
		<div className = 'rectangle' >
			<button type="button">Take out the trash for us</button>
		</div>
		</div>
	</div>
	<div className='center'>
	<p>McDonald's Store #2345</p>
		<p>Food Bank available: 1 Burger reward</p>
		<div className='Task'>
		<div className = 'rectangle'>
			<button type="button">Clear the yard for us</button>
		</div>
		<br></br>
		<div className = 'rectangle' >
			<button type="button">Take out the trash for us</button>
		</div>
		</div>
	</div>
	</>
}