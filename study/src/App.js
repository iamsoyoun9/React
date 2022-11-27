import React, {useState} from 'react';
import './App.css';

function App() {

	let [글제목,글제목변경] = useState(['크리스마스 홈파티 와인 추천','크리스마스 홈파티 음식 추천','크리스마스 홈파티 디저트 추천']); // [a,b] : a = 남자코트추천 / b= 새로운 자리?
	let posts = '상무지구 고기 맛집';

	return (
		<div className="App">
			<div className='black-nav'>
				<div>React 공부</div>
			</div>
			<div className='list'>
				<h3>{글제목[0]}</h3>
				<p>11월 28일 발행</p>
				<hr />
			</div>
			<div className='list'>
				<h3>{글제목[1]}</h3>
				<p>11월 28일 발행</p>
				<hr />
			</div>
			<div className='list'>
				<h3>{글제목[2]}</h3>
				<p>11월 28일 발행</p>
				<hr />
			</div>
		</div>
	);
}

export default App;
