// 담당자 : 은희
//수업시간 내용 : onmouseover 사용

import { Link } from 'react-router-dom';
import UserNav from './UserNav';
import styles from '../css/DotBorder.css'; // CSS 모듈 임포트
import { useEffect, useState } from 'react';
import WrongAnswerRetryStatusBar from './WrongAnswerRetryStatusBar';

export default function WrongAnswer() {
  const wrongs = [
    {id: 0, subject: "Queue", question:"큐는 어떤 자료구조인가요"},
    {id: 1, subject: "스택", question:"스택에필요한 어쩌구저쩌구"},
    {id: 2, subject: "BFS", question:"이진검색트리어쩌구저쩌구"},
  ]
  const rows = wrongs.map((value, index)=>(
    <tr key={index} className="dashed-row">
      <td>{`${value.subject}`}</td>
      <td>{`${value.question}`}</td>
      <td>{`DELETE BUTTON`}</td>
    </tr>
  ))
  // const rows = Array.from({ length: 10 }, (_, i) => (
  //   <tr key={i} className="dashed-row">
  //     <td>{`Row ${i + 1}, Col 1`}</td>
  //     <td>{`Row ${i + 1}, Col 2`}</td>
  //     <td>{`Row ${i + 1}, Col 3`}</td>
  //   </tr>
  // ));

  useEffect(()=>{
    console.log(rows);
  },[])

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ height: '100%' }}>
      {modalOpen && <div className="modal-backdrop" />}
      <UserNav />
      <div
        style={{ marginTop: '50px', padding: '0.5rem 8rem', fontSize: '80px' }}
      >
        오답노트
      </div>

      <div
        style={{
          display: 'flex',
          padding: '5rem',
          position: 'absolute',
          top: '120px',
          right: '40px',
        }}
      >
        <div
          style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          JAVA
        </div>
        <div
          style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          PYTHON
        </div>
        <div
          style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          C
        </div>
        <div
          style={{ fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          C++
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '2rem',
          marginBottom: '0rem',
        }}
      ></div>
      <div style={{ padding: 20 }}>
        <div
          className="scroll-container"
          style={{ maxHeight: '35rem', overflowY: 'auto' }}
        >
          {' '}
          {/* 스크롤 컨테이너 */}
          <table
            className="dashed-table"
            style={{ width: '90%', fontSize: '1.5em' }}
          >
            <thead>
              <tr className="dashed-row">
                <th>SUBJECT</th>
                <th>QUESTION</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '1rem',
          marginBottom: '0rem',
        }}
      >
        <span
          style={{ fontSize: '2.3rem' }}
          className="retry-button-tag"
          onClick={openModal}
        >
          RETRY
        </span>
      </div>

      {modalOpen && (
        <div className="modal-container">
          <WrongAnswerRetryStatusBar onClose={closeModal} />
          {
            <div
              style={{
                backgroundColor: 'black',
                height: '100%',
                color: 'white',
                textAlign: 'center',
                padding:20,
                position:'relative'
              }}
            >
              <h1 style={{padding:20}}>문제</h1>
              <p className='modal-QA'>이 부분에 문제</p>
              <p className='modal-QA'>이 부분에 정답</p>
              <div className='modal-button-container'>
                <span className='modal-button' onClick={()=>{console.log('이전 문제로 이동시키기')}}>▶이전</span>
                <span className='modal-button' onClick={()=>{console.log('다음 문제로 이동시키기')}}>▶다음</span>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
}
