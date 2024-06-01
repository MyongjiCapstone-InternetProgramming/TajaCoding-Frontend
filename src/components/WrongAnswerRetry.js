// 담당자 : 정준

import { useEffect, useState } from 'react';
import UserNav from './UserNav';
import LayoutForWrongAnswer from './layout/LayoutForWrongAnswer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from '../css/DotBorder.css';
import WrongAnswerRetryStatusBar from './WrongAnswerRetryStatusBar';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export default function WrongAnswerRetry(){
  const { selectedOption } = useParams();
  const navigate = useNavigate();

  // 문제 다 풀었을 때 띄우는 모달 창 관련
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [quizData_wrongs, setQuizData_wrongs] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
          const userId = localStorage.getItem('id');
          const response = await axios.get(`${API_URL}/api/wrongnotestart/${userId}?language=${selectedOption}`);
          if (response.data.data.length===0){
            window.alert('문제가 없습니다.');
            return navigate('/wronganswer/JAVA');
          }
          setQuizData_wrongs(response.data.data);
      } catch (error) {
          console.error('Error fetching wrongnote data:', error);
      }
  };
  fetchData();
  },[])

  const [timer, setTimer] = useState(0);
  const [showHint, setshowHint] = useState(false);
  const [ind, setInd] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const minute = parseInt(timer/60);
  const second = timer%60;

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
  // console.log(correctCount)

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  }
  // console.log(userAnswer);

  const activeButton = () => {
    handleInd();
  }
  const activeEnter = (e) => {
    if((e.key === 'Enter') && !modalOpen) {
      activeButton();
    }
    if((e.key === 'Enter') && !modalOpen && userAnswer==='') {
      alert('모르겠다면 NEXT 버튼을 눌러주세요')
    }
  }

  return(
    <div style={{height:'100%'}}>
      <div style={{ display: 'flex', position: 'fixed', left: '7%', marginTop:'1.3rem'}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='JAVA'? 'limegreen': 'white' }}>JAVA</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='PYTHON'? 'limegreen': 'white' }}>PYTHON</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption==='C'? 'limegreen': 'white' }}>C</div>
        <div style={{ fontSize: '1.8rem', color: selectedOption==='CPP'? 'limegreen': 'white' }}>C++</div>
      </div>
      <UserNav/>
      {quizData_wrongs ? (
      <LayoutForWrongAnswer timer={timer} nowind={ind+1} len={quizData_wrongs.length} correctCount={correctCount}>
        <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center'}}>
          <div style={{width:'85%', display:'flex', flexDirection:'column'}}>
            <div style={{ marginTop:'17%', flex:1}}>
              <div style={{ maxHeight: '35rem', overflowY: 'auto', }}>
                <table className="dashed-table" style={{ width: '100%', fontSize: '1.5em'}}>
                  <thead>
                    <tr className="dashed-row">
                      <th>{quizData_wrongs[ind]?.question}</th>
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
                <span className='button-style' onClick={() => {window.history.back();}} style={{backgroundColor:'red'}}>EXIT</span>
                <span className='button-style' onClick={handleInd}>NEXT</span>
              </div>
            </div>
          </div>
        </div>
      </LayoutForWrongAnswer>
      ) : (
        <></>
      )}
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
                <Link to={`/wronganswer/${selectedOption}`} className='result-modal-button'>확인</Link>
              </div>
            </div>
        </div>
      )}
    </div>
  )
}