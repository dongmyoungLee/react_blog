/* eslint-disable */

import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집 추천', '추천 추천'])
  let [따봉, 따봉변경] = useState([0,1,2])
  
  let [modal, modal변경] = useState(false)
  
  let posts = '미사 고기 맛집'

  // 함수형

  // function 제목바꾸기() {
  //   let newArray =  [...글제목] //deep copy
  //   newArray[0] = '여자 코트 추천!'
  //   글제목변경(newArray)
  // }

  function like(index) {
    let newLike = [...따봉]
    newLike[index] = newLike[index] + 1
    따봉변경(newLike)
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>
      
      {
        글제목.map((item, index) => {
          return (
            <div className="list" key={item}>
              <h3>{item}<span onClick={() => {like(index)}}>👍</span>{따봉[index]}</h3>
              <p>2월 {index + 1}일 발행</p>
              <hr />
            </div>
          )
        })
      }




      {/* <button onClick={() => {modal변경(!modal)}}>버튼</button> */}
      {
        modal === true
        ? <Modal />
        : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
