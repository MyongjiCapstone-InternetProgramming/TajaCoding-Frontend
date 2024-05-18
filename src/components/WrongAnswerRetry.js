import { useState } from 'react';
import UserNav from './UserNav';
import LayoutForWrongAnswer from './layout/LayoutForWrongAnswer';
import { Link } from 'react-router-dom';
import styles from '../css/DotBorder.css';

export default function WrongAnswerRetry(){
  const [timer, setTimer] = useState(90);
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
      <LayoutForWrongAnswer timer={timer}>
        <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center'}}>
          <div style={{width:'85%', display:'flex', flexDirection:'column'}}>
            <div style={{ marginTop:'17%', flex:1}}>
              <div style={{ maxHeight: '35rem', overflowY: 'auto', }}>
                <table className="dashed-table" style={{ width: '100%', fontSize: '1.5em'}}>
                  <thead>
                    <tr className="dashed-row">
                      <th>문자열에서 특정 문자열을 다른 문자열로 대체하는 메소드의 이름은 무엇인가요?</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div style={{display:'flex', padding:'0.5em 2em'}}>
                <span className='hint-button' style={{fontSize:'1.5em', marginTop:'1rem', marginLeft:'0.5rem'}} onClick={()=>{console.log('힌트 버튼 눌림')}} onMouseOver={(e)=>{e.target.style.color='lime'}} onMouseOut={(e) => (e.target.style.color = 'white')}>HINT</span>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', flex:2}}>
              <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'3rem 0 1rem 0', flex:2}}>
                <span style={{textAlign:'left', fontSize:'1.5rem', paddingBottom:'0.3rem', marginBottom:'0.3rem', flex:'4%'}}>답:</span>
                <span style={{borderBottom:'6px solid #FFFFFFFF', width:'100%', textAlign:'left', paddingBottom:'0.3rem', marginBottom:'0.3rem', fontSize:'1.5rem', flex:'96%'}}>이 부분에 사용자가 입력</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:'2.8rem', padding:'1em 0', flex:1}}>
                <span className='button-style' style={{backgroundColor:'red'}}><Link to='/wronganswer' className="link-tag">EXIT</Link></span>
                <span className='button-style'>NEXT</span>
              </div>
            </div>
          </div>
        </div>
      </LayoutForWrongAnswer>
    </div>
  )
}