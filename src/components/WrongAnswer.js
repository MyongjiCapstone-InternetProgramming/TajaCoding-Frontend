// 담당자 : 은희, 정준
//수업시간 내용 : onmouseover 사용

import { Link, redirect } from 'react-router-dom';
import UserNav from './UserNav';
import styles from '../css/DotBorder.css'; // CSS 모듈 임포트
import { useEffect, useState } from 'react';
import WrongAnswerRetryStatusBar from './WrongAnswerRetryStatusBar';
import WrongAnswerRetry from './WrongAnswerRetry';
//import block from "../wrong.json";


export default function WrongAnswer() {
  // 모달 관련
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
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
  const C_wrongs = [
    {id: 0, subject: "Queue", question:"C큐", hint:'C큐 힌트', answer:'C큐입니다'},
    {id: 1, subject: "스택", question:"C스택", hint:'C스택 힌트', answer:'C스택입니다'},
    {id: 2, subject: "BFS", question:"C이진검색트리", hint:'C이진검색트리 힌트', answer:'C이진검색트리입니다'},
  ];

  const Cpp_wrongs = [
    {id: 0, subject: "Queue", question:"C++큐", hint:'C++큐 힌트', answer:'C++큐입니다'},
    {id: 1, subject: "스택", question:"C++스택", hint:'C++스택 힌트', answer:'C++스택입니다'},
    {id: 2, subject: "BFS", question:"C++이진검색트리", hint:'C++이진검색트리 힌트', answer:'C++이진검색트리입니다'},
  ];

  const JAVA_wrongs = [
    {id: 0, subject: "Queue", question: "JAVA 큐", hint: 'JAVA 큐 힌트', answer: 'JAVA 큐입니다'},
    {id: 1, subject: "스택", question: "JAVA 스택", hint: 'JAVA 스택 힌트', answer: 'JAVA 스택입니다'},
    {id: 2, subject: "BFS", question: "JAVA 이진검색트리", hint: 'JAVA 이진검색트리 힌트', answer: 'JAVA 이진검색트리입니다'}
  ];

  const PYTHON_wrongs = [
    {id: 0, subject: "Queue", question: "PYTHON 큐", hint: 'PYTHON 큐 힌트', answer: 'PYTHON 큐입니다'},
    {id: 1, subject: "스택", question: "PYTHON 스택", hint: 'PYTHON 스택 힌트', answer: 'PYTHON 스택입니다'},
    {id: 2, subject: "BFS", question: "PYTHON 이진검색트리", hint: 'PYTHON 이진검색트리 힌트', answer: 'PYTHON 이진검색트리입니다'}
  ];

  // 선택된 언어에 따라 문제 배열 선택
  let wrongs;
  switch(selectedOption) {
    case 'C':
      wrongs = C_wrongs;
      break;
    case 'Cpp':
      wrongs = Cpp_wrongs;
      break;
    case 'JAVA':
      wrongs = JAVA_wrongs;
      break;
    case 'PYTHON':
      wrongs = PYTHON_wrongs;
      break;
    default:
      wrongs = [];
  }
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

  // const dataset = wrong
  // const NewDataset = dataset.map((item, index) => (
  //     <tr key={index} className="dashed-row">
  //       <td>{item.subject}</td>
  //       <td>{item.question}</td>
  //       <td>{'DELETE'}</td> 
  //     </tr>
  //   ));

  return (
    <div style={{ height: '100%' }}>
      {modalOpen && <div className="modal-backdrop" />}
      <UserNav />
      <div style={{  marginTop: '60px',marginBottom: '60px',padding: '0.5rem 10rem', fontSize: '65px',height: '10%' }}>
        오답노트
      </div>

      <div style={{ display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px'}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='JAVA'? 'limegreen': 'white', cursor:'pointer'}} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='JAVA' ? 'limegreen' : 'white')} onClick={()=>{setSelectedOption('JAVA')}}>JAVA</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='PYTHON'? 'limegreen': 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='PYTHON' ? 'limegreen' : 'white')} onClick={()=>{setSelectedOption('PYTHON')}}>PYTHON</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='C'? 'limegreen': 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='C' ? 'limegreen' : 'white')} onClick={()=>{setSelectedOption('C')}}>C</div>
        <div style={{ fontSize: '1.8rem', color: selectedOption==='Cpp'? 'limegreen': 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='Cpp' ? 'limegreen' : 'white')} onClick={()=>{setSelectedOption('Cpp')}}>C++</div>
      </div>

      {/* <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', marginBottom: '0rem'}}></div> */}
      {/* <div style={{ padding: 20 }}> */}
      <div style={{ paddingRight:10, paddingLeft:10}}>
        <div className="scroll-container" style={{ maxHeight: '27rem', overflowY: 'auto' }}>
          {/* {' '} */}
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
