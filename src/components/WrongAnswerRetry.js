import { useState } from 'react';
import UserNav from './UserNav';
import LayoutForWrongAnswer from './layout/LayoutForWrongAnswer';
import { Link } from 'react-router-dom';
import styles from '../css/DotBorder.css';

export default function WrongAnswerRetry(){
  const wrongs = [
    {id: 0, subject: "Queue", question:"큐는 어떤 자료구조인가요", hint:'큐 힌트랍니다', answer:'큐는 어쩌구입니다'},
    {id: 1, subject: "스택", question:"스택에필요한 어쩌구저쩌구", hint:'스택 힌트랍니다', answer:'스택은 어쩌구입니다'},
    {id: 2, subject: "BFS", question:"이진검색트리어쩌구저쩌구", hint:'이진검색트리 힌트랍니다', answer:'이진검색트리는 어쩌구입니다'},
  ]

  const [timer, setTimer] = useState(90);
  const [showHint, setshowHint] = useState(false);
  const [ind, setInd] = useState(0);
  const handleInd = () => {
    if (ind < wrongs.length - 1) {
      setInd(ind + 1);
      setshowHint(false)
    }
  };
  return(
    <div style={{height:'100%'}}>
      <div style={{ display: 'flex', position: 'fixed', left: '7%', marginTop:'1.3rem'}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>COMPUTER_SCIENCE</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>JAVA</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>PYTHON</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>C</div>
        <div style={{ fontSize: '1.8rem', color: 'white' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>C++</div>
      </div>
      <UserNav/>
      <LayoutForWrongAnswer timer={timer} nowind={ind+1} len={wrongs.length}>
        <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center'}}>
          <div style={{width:'85%', display:'flex', flexDirection:'column'}}>
            <div style={{ marginTop:'17%', flex:1}}>
              <div style={{ maxHeight: '35rem', overflowY: 'auto', }}>
                <table className="dashed-table" style={{ width: '100%', fontSize: '1.5em'}}>
                  <thead>
                    <tr className="dashed-row">
                      <th>{wrongs[ind].question}</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div style={{display:'flex', padding:'0.5em 2em'}}>
                <div style={{fontSize:'1.5em', marginTop:'1rem', marginLeft:'0.5rem'}}>
                  {!showHint ? (<span className='hint-button' onClick={()=>{setshowHint(true)}} onMouseOver={(e)=>{e.target.style.color='lime'}} onMouseOut={(e) => (e.target.style.color = 'white')}>HINT</span>) : <span style={{color:'white'}}>HINT {wrongs[ind].hint}</span>}
                </div>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', flex:2}}>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'3rem 0 1rem 0', flex:2}}>
                <span style={{textAlign:'left', fontSize:'1.5rem', paddingBottom:'0.3rem', marginBottom:'0.3rem', flex:'4%'}}>답:</span>
                <span style={{borderBottom:'6px solid #FFFFFFFF', width:'100%', textAlign:'left', paddingBottom:'0.3rem', marginBottom:'0.3rem', fontSize:'1.5rem', flex:'96%'}}>이 부분에 사용자가 입력</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:'2.8rem', padding:'1em 0', flex:1}}>
                <span className='button-style' style={{backgroundColor:'red'}}><Link to='/wronganswer' className="link-tag">EXIT</Link></span>
                <span className='button-style' onClick={handleInd}>NEXT</span>
              </div>
            </div>
          </div>
        </div>
      </LayoutForWrongAnswer>
    </div>
  )
}