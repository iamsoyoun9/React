import './App.css';
import logo from './logo.svg'

function App() {

	let posts = '상무지구 고기 맛집';
	function num(){
		return 100
	}

	return (
		<div className="App">
			<div className='black-nav'>
				<div>React 공부</div>
			</div>
			<img src={logo} alt="" />
			<h4>{ posts }</h4>
			<h4>{ num() }</h4>
		</div>
	);
}

export default App;
