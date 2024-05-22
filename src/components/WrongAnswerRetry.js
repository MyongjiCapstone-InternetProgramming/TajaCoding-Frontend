// 담당자 : 정준

import { useEffect, useState } from 'react';
import UserNav from './UserNav';
import LayoutForWrongAnswer from './layout/LayoutForWrongAnswer';
import { Link } from 'react-router-dom';
import styles from '../css/DotBorder.css';
import WrongAnswerRetryStatusBar from './WrongAnswerRetryStatusBar';

export default function WrongAnswerRetry(){
  // 문제 다 풀었을 때 띄우는 모달 창 관련
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [timer, setTimer] = useState(0);
  const [showHint, setshowHint] = useState(false);
  const [ind, setInd] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const minute = parseInt(timer/60);
  const second = timer%60;
  const [selectedOption, setSelectedOption] = useState('');

  const C_wrongs = [
    {id: 0, subject: "Queue", question:"C큐", hint:'C큐 힌트', answer:'C큐입니다'},
    {id: 1, subject: "스택", question:"C스택", hint:'C스택 힌트', answer:'C스택입니다'},
    {id: 2, subject: "BFS", question:"C이진검색트리", hint:'C이진검색트리 힌트', answer:'C이진검색트리입니다'},
  ]
  const Cpp_wrongs = [
    {id: 0, subject: "Queue", question:"C++큐", hint:'C++큐 힌트', answer:'C++큐입니다'},
    {id: 1, subject: "스택", question:"C++스택", hint:'C++스택 힌트', answer:'C++스택입니다'},
    {id: 2, subject: "BFS", question:"C++이진검색트리", hint:'C++이진검색트리 힌트', answer:'C++이진검색트리입니다'},
  ]
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
  
  const quizData_wrongs = {C_wrongs, Cpp_wrongs, JAVA_wrongs, PYTHON_wrongs}[selectedOption]
  useEffect(()=>{ // 모달이 열려있지 않을 때만 시간이 카운트 됨
    let id;
    if(!modalOpen){
      id = setInterval(() => {
        setTimer(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(id);
  },[!modalOpen])

  const handleInd = () => {
    if(userAnswer === quizData_wrongs[ind].answer){
      setCorrectCount(correctCount + 1)
      alert('맞았어요~')
    }else(
      alert('틀렸어요ㅠㅠ')
    )
    if (ind < quizData_wrongs.length - 1) {
      setshowHint(false); 
      setInd(ind + 1);
      setUserAnswer('');
    }else if(ind === quizData_wrongs.length - 1){
      openModal()
    }
  };
  console.log(correctCount)

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  }
  console.log(userAnswer);

  const activeButton = () => {
    handleInd();
  }
  const activeEnter = (e) => {
    if((e.key === 'Enter') && !modalOpen) {
      activeButton();
    }
  }

  return(
    <div style={{height:'100%'}}>
      <div style={{ display: 'flex', position: 'fixed', left: '7%', marginTop:'1.3rem'}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'JAVA' ? 'limegreen' : 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'JAVA' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('JAVA')}}>JAVA</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'PYTHON' ? 'limegreen' : 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'PYTHON' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('PYTHON')}}>PYTHON</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'C' ? 'limegreen' : 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'C' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('C')}}>C</div>
        <div style={{ fontSize: '1.8rem', color: selectedOption === 'Cpp' ? 'limegreen' : 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'Cpp' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('Cpp')}}>C++</div>
      </div>
      <UserNav/>
      <LayoutForWrongAnswer timer={timer} nowind={ind+1} len={quizData_wrongs.length} correctCount={correctCount}>
        <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center'}}>
          <div style={{width:'85%', display:'flex', flexDirection:'column'}}>
            <div style={{ marginTop:'17%', flex:1}}>
              <div style={{ maxHeight: '35rem', overflowY: 'auto', }}>
                <table className="dashed-table" style={{ width: '100%', fontSize: '1.5em'}}>
                  <thead>
                    <tr className="dashed-row">
                      <th>{quizData_wrongs[ind].question}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div style={{display:'flex', padding:'0.5em 2em'}}>
                <div style={{fontSize:'1.5em', marginTop:'1rem', marginLeft:'0.5rem'}}>
                  {!showHint ? (<span className='hint-button' onClick={()=>{setshowHint(true)}} onMouseOver={(e)=>{e.target.style.color='lime'}} onMouseOut={(e) => (e.target.style.color = 'white')}>HINT</span>) : <span style={{color:'white'}}>HINT {quizData_wrongs[ind].hint}</span>}
                </div>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', flex:2}}>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'3rem 0 1rem 0', flex:2}}>
                <span style={{textAlign:'left', fontSize:'1.5rem', paddingBottom:'0.3rem', marginBottom:'0.3rem', flex:'4%'}}>답:</span>
                <input
                  type='text'
                  value={userAnswer} 
                  onChange={handleInputChange}
                  onKeyDown={(e)=>{activeEnter(e)}}
                  style={{
                    borderBottom:'6px solid #FFFFFFFF', 
                    width:'100%', 
                    textAlign:'left', 
                    paddingBottom:'0.3rem', 
                    marginBottom:'0.3rem', 
                    fontSize:'1.5rem', 
                    flex:'96%',
                    backgroundColor:'black',
                    color: 'white'
                    }}
                />
              </div>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:'2.8rem', padding:'1em 0', flex:1}}>
                <span className='button-style' style={{backgroundColor:'red'}}><Link to='/wronganswer' className="link-tag">EXIT</Link></span>
                <span className='button-style' onClick={handleInd}>NEXT</span>
              </div>
            </div>
          </div>
        </div>
      </LayoutForWrongAnswer>
      {modalOpen && <div className="modal-backdrop" />}
      {modalOpen && (
        <div className="modal-container">
          <WrongAnswerRetryStatusBar onClose={closeModal} title={'RETRY 결과'} />
            <div className='result-modal-container'>
              <div className='result-modal-inner-container'>
                <p className='result-modal-text'>소요시간 : {("0"+minute).slice(-2)+"분 "+("0"+second).slice(-2) +'초'}</p>
                <p className='result-modal-text'>정답수 : {correctCount}/{quizData_wrongs.length}</p>
                <p className='result-modal-text'>점수 : {((correctCount/quizData_wrongs.length)*100).toFixed(0)}점</p>
              </div>
              <div className='result-modal-button-container'>
                <Link to='/wronganswer' className='result-modal-button'>확인</Link>
              </div>
            </div>
        </div>
      )}
    </div>
  )
}