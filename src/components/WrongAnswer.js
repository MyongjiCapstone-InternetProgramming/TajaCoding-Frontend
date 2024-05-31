// 담당자 : 은희, 정준
//수업시간 내용 : onmouseover 사용

import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import UserNav from './UserNav';
import styles from '../css/DotBorder.css'; // CSS 모듈 임포트
import { useEffect, useState } from 'react';
import WrongAnswerRetryStatusBar from './WrongAnswerRetryStatusBar';
import WrongAnswerRetry from './WrongAnswerRetry';
import useWrongNote from '../hook/useWrongNote';  // useWrongNote 훅을 import


// import block from "../wrong.json";


export default function WrongAnswer() {
  const {selectedOption} = useParams();
  const userId = localStorage.getItem('id')
  const navigate = useNavigate();
  //이 부분만 추가
  const {getWrongNote, deleteWrongNote} = useWrongNote();
  const [dataset, setDataset] = useState([]);

  // 모달 관련
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
//이 부분만 추가
  useEffect(()=>{
    getWrongNote(userId).then(res=>{
        setDataset(res.data);
        console.log(res.data);
        console.log("userId: ", userId)
    })
  },[selectedOption])

  const handleDelete = (wrongId) => {
    alert("선택한 문제를 삭제합니다.")
    deleteWrongNote(wrongId).then(res => {
        // 성공적으로 삭제된 후 데이터 갱신
        setDataset(prevNotes => prevNotes.filter(note => note.wrongId !== wrongId));
        console.log(res.data);
    }).catch(err => {
        console.error(err);
    });
  };

  useEffect(()=>{
    console.log('selectedOption: ', selectedOption)
  },[selectedOption]);

  const handleLanguageSelect = (option) => {
    navigate(`/wronganswer/${option}`) // 선택한 언어에 해당하는 문제를 띄우기 위함
  }

  const [clickedRow, setClickedRow] = useState(''); // 클릭된 문제가 몇 번 인덱스에 해당하는지 확인해서 clickedRow에 담음
  const handlePrevious = () => {
    if (clickedRow > 0) {
      setClickedRow(clickedRow - 1);
    }
  };

  const handleNext = () => { // 다음 문제 보여주기
    if (clickedRow < dataset.length - 1) {
      setClickedRow(clickedRow + 1);
    }
  };

  const rows = dataset.map((value, index)=>(
    <tr key={index} className="dashed-row" onClick={() => setClickedRow(index)}>
      <td className='clickable-subject' onClick={openModal} onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>{`${value.question}`}</td>
      <td className='clickable-subject' onClick={openModal} onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>{new Date(value.createDate).toISOString().split('T')[0]}</td>
      <td onDoubleClick={()=>handleDelete(value.wrongId)} style={{cursor:'pointer'}} onMouseOver={(e) => (e.target.style.color = 'red')} onMouseOut={(e) => (e.target.style.color = 'white')}>{'DELETE'}</td>
    </tr>
  ))

  return (
    <div style={{ height: '100%' }}>
      {modalOpen && <div className="modal-backdrop" />}
      <UserNav />
      <div style={{  marginTop: '60px',marginBottom: '60px',padding: '0.5rem 10rem', fontSize: '65px',height: '10%' }}>
        오답노트
      </div>

      <div style={{ display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px'}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='JAVA'? 'limegreen': 'white', cursor:'pointer'}} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='JAVA' ? 'limegreen' : 'white')} onClick={()=>{handleLanguageSelect('JAVA')}}>JAVA</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='PYTHON'? 'limegreen': 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='PYTHON' ? 'limegreen' : 'white')} onClick={()=>{handleLanguageSelect('PYTHON')}}>PYTHON</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='C'? 'limegreen': 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='C' ? 'limegreen' : 'white')} onClick={()=>{handleLanguageSelect('C')}}>C</div>
        <div style={{ fontSize: '1.8rem', color: selectedOption==='Cpp'? 'limegreen': 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption==='Cpp' ? 'limegreen' : 'white')} onClick={()=>{handleLanguageSelect('Cpp')}}>C++</div>
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
                <th style={{textAlign:'center'}}>QUESTION</th>
                <th style={{textAlign:'center'}}>WrongDate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '5rem', marginBottom: '0rem' }}>
        <span style={{ fontSize: '2.3rem' }} className="retry-button-tag" onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>
          <Link to={selectedOption ? `/wronganswerretry/${selectedOption}` : '#'} className='link-tag'>RETRY</Link>
        </span>
      </div>
      
      {modalOpen && (
        <div className="modal-container">
          <WrongAnswerRetryStatusBar onClose={closeModal} title='오답노트' />
            <div className='modal-inner-container'>
              <div className='modal-except-button'>
                <h1 style={{padding:10}}>{dataset[clickedRow].language}</h1>
                <p className='modal-QA' style={{height:70}}>{dataset[clickedRow].question}</p>
                <p className='modal-QA'>{dataset[clickedRow].answer}</p>
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
