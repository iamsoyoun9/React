/* eslint-disable */

import React, {useState} from 'react';
import './App.css';

function App() {

	let [글제목,글제목변경] = useState(['남자코트추천','크리스마스 홈파티 와인 추천','와인과 어울리는 안주 추천']); // [a,b] : a = 남자코트추천 / b= 새로운 자리?
	let posts = '상무지구 고기 맛집';
	let [좋아요,좋아요수정] = useState(0);

	function reName(){
		var newArray = [...글제목]; // deep copy :  값 공유 X, 서로 독립적인 값을 가지는 복사
		newArray[0] = '여자코트추천';
		글제목변경(newArray);
	}
	function alignName(){
		var newArray = [...글제목];
		newArray.sort();
		글제목변경(newArray);
	}
	return (
		<div className="App">
			<div className='black-nav'>
				<div>React 공부</div>
			</div>
			<button onClick={()=>{reName()}}>버튼</button>
			<button onClick={()=>{alignName()}}>정렬</button>
			<div className='list'>
				<h3>{글제목[0]} <span onClick={()=>{좋아요수정(좋아요+1)}}>👍</span> {좋아요} </h3>
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
