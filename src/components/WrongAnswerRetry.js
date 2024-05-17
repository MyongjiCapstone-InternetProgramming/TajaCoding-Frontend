import { useState } from 'react';
import UserNav from './UserNav';
import LayoutForWrongAnswer from './layout/LayoutForWrongAnswer';

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
            <div style={{backgroundColor:'red', width:'85%'}}>
              <div>
                <p>이 부분 수정</p>
              </div>
            </div>
          </div>
        </LayoutForWrongAnswer>
      </div>
  )
}