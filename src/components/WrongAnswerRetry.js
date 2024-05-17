import { useState } from 'react';
import UserNav from './UserNav';
import TypingLayout from './layout/typinglayout';

export default function WrongAnswerRetry(){
  const [timer, setTimer] = useState(90);
  return(
    <div style={{height: '100%'}}>
      <UserNav/>
      <TypingLayout timer={timer}>
        <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center'}}>
          <div style={{backgroundColor:'red', width:'85%'}}>
            <div>
              <p>이 부분 수정해서 만들기</p>
            </div>
          </div>
        </div>
      </TypingLayout>
    </div>
  )
}

// 아직 손 안 댐. 코드 그대로 가져온 상황