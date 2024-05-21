// 담당자 : 은희
//수업시간 내용 : onmouseover 사용

import { Link, redirect } from 'react-router-dom';
import UserNav from './UserNav';
import styles from '../css/DotBorder.css'; // CSS 모듈 임포트
import { useEffect, useState } from 'react';
import WrongAnswerRetryStatusBar from './WrongAnswerRetryStatusBar';
import WrongAnswerRetry from './WrongAnswerRetry';

export default function WrongAnswer() {
  // 모달 관련
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const [clickedRow, handleRowClick] = useState(''); // 클릭된 문제가 몇 번 인덱스에 해당하는지 확인해서 clickedRow에 담음
  const handlePrevious = () => {
    if (clickedRow > 0) {
      handleRowClick(clickedRow - 1);
    }
  };

  const handleNext = () => { // 다음 문제 보여주기
    if (clickedRow < wrongs.length - 1) {
      handleRowClick(clickedRow + 1);
    }
  };
  const wrongs = [
    {id: 0, subject: "Queue", question:"큐는 어떤 자료구조인가요", hint:'큐 힌트랍니다', answer:'큐는 어쩌구입니다'},
    {id: 1, subject: "스택", question:"스택에필요한 어쩌구저쩌구", hint:'스택 힌트랍니다', answer:'스택은 어쩌구입니다'},
    {id: 2, subject: "BFS", question:"이진검색트리어쩌구저쩌구", hint:'이진검색트리 힌트랍니다', answer:'이진검색트리는 어쩌구입니다'},
  ]
  const rows = wrongs.map((value, index)=>(
    <tr key={index} className="dashed-row" onClick={() => handleRowClick(index)}>
      <td className='clickable-subject' onClick={openModal} onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>{`${value.subject}`}</td>
      <td>{`${value.question}`}</td>
      <td>{'DELETE'}</td>
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

  return (
    <div style={{ height: '100%' }}>
      {modalOpen && <div className="modal-backdrop" />}
      <UserNav />
      <div style={{  marginTop: '50px',padding: '0.5rem 8rem', fontSize: '80px',height: '10%' }}>
        오답노트
      </div>

      <div style={{ display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px'}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>JAVA</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>PYTHON</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>C</div>
        <div style={{ fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>C++</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', marginBottom: '0rem'}}></div>
      <div style={{ padding: 20 }}>
        <div className="scroll-container" style={{ maxHeight: '35rem', overflowY: 'auto' }}>
          {' '}
          {/* 스크롤 컨테이너 */}
          <table className="dashed-table" style={{ width: '90%', fontSize: '20px' }}>
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
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem', marginBottom: '0rem' }}>
        <span style={{ fontSize: '2.3rem' }} className="retry-button-tag" onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>
          <Link to='/wronganswerretry' className='link-tag'>RETRY</Link>
        </span>
      </div>
      
      {modalOpen && (
        <div className="modal-container">
          <WrongAnswerRetryStatusBar onClose={closeModal} title='오답노트' />
            <div className='modal-inner-container'>
              <div className='modal-except-button'>
                <h1 style={{padding:10}}>{wrongs[clickedRow].subject}</h1>
                <p className='modal-QA' style={{height:70}}>{wrongs[clickedRow].question}</p>
                <p className='modal-QA'>{wrongs[clickedRow].answer}</p>
              </div>
              <div className='modal-button-container'>
                <span className='modal-button' onClick={handlePrevious}>▶이전</span>
                <span className='modal-button' onClick={handleNext}>▶다음</span>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}
