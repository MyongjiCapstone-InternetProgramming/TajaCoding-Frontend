// 담당자 : 은희, 정준(언어 선택 안되면 시작 못하게 막아둠)
//수업시간 내용 : onmouseover 사용

import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import UserNav from './UserNav';
import { useState } from 'react';

export default function WordQuiz() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleStartClick = () => {
    if (!selectedOption) {
      alert('언어를 선택해주세요');
    } else {
      console(`선택된 언어 : ${selectedOption}`)  
    }
  }

  console.log('selectedOption : ', selectedOption)
  return (
    <div style={{ height: '100%' }}>
      <UserNav />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', height: '40%'}}>
        <Link to={'/longcode'} style={{textDecoration:'none'}}>
          <div style={{ marginTop: '30px', padding: '0.5rem 8rem', fontSize: '20px', color: 'white'}} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>SELECT * FROM 긴글 코딩 연습;</div>
        </Link>
        <div>
          <Link to="/blockcode" style={{ padding: '0.5rem 8rem', fontSize: '20px', color: 'white', textDecoration: 'none', }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>SELECT * FROM 빈칸 퀴즈;</Link>
        </div>
        <div style={{ padding: '0.5rem 8rem', fontSize: '20px', color: 'limegreen'}}>SELECT * FROM 개념 퀴즈;</div>
      </div>

      <div style={{ display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px'}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')} onClick={()=>{setSelectedOption('JAVA')}}>JAVA</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')} onClick={()=>{setSelectedOption('PYTHON')}}>PYTHON</div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')} onClick={()=>{setSelectedOption('C')}}>C</div>
        <div style={{ fontSize: '1.8rem', color: 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')} onClick={()=>{setSelectedOption('Cpp')}}>C++</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '0rem', marginBottom: '6rem'}}>
        <Link style={{ border: '0.5rem dashed white', padding: '8rem 10rem', fontSize: '2rem', cursor:'pointer'}} to={selectedOption ? `/wordquizstart/${selectedOption}` : '#'} className="link-tag" onClick={handleStartClick}>시작하기</Link>
        <Link style={{ border: '0.5rem dashed white', padding: '8rem 10rem', fontSize: '2rem'}} to={'/wronganswer'} className="link-tag">내 오답노트</Link>
      </div>
    </div>
  );
}
