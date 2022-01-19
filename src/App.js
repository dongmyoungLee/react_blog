/* eslint-disable */

import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집 추천', '추천 추천'])
  let [따봉, 따봉변경] = useState([])
  
  let [modal, modal변경] = useState(false)
  
  let [누른제목, 누른제목변경] = useState(0)

  let [입력값, 입력값변경] = useState('')

  let posts = '미사 고기 맛집'

  function renderLike() {
    for(let i = 0; i < 글제목.length; i++) {
      따봉.push(0)
    }
  }
  renderLike()

  function like(index) {
    let newLike = [...따봉]
    newLike[index] = newLike[index] + 1
    따봉변경(newLike)
  }

  function change() {
    let newTitle = [...글제목]
    newTitle.unshift(입력값)
    글제목변경(newTitle)
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
              <h3 onClick={ () => {누른제목변경(index)} }>{item}<span onClick={() => {like(index)}}>👍</span>{따봉[index]}</h3>
              <p>2월 {index + 1}일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={(e) => {입력값변경(e.target.value)}} />
        <button onClick={change}>저장</button>
      </div>

      <button onClick={() => {modal변경(!modal)}}>열고닫기</button>
      
      <Profile></Profile>

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
        <h2>제목 : {props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

// class 를 이용한 것
class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      name : 'Kim',
      age : 25
    }
  }

  changeName() {
    this.setState({name : 'Lee'})
  }

  render() {
    return (
      <div>
        <div>Class 이용 입니다.</div>
        <p>저는 {this.state.name} 이고 나이는 {this.state.age} 입니다.</p>
        {/* Arrow Function 사용하면 bind 필요없음*/}
        <button onClick={ this.changeName.bind(this) }>이름 변경 버튼</button>
      </div>
    )
  }
}

export default App;