// 채윤 (생성 : 2024-04-28)
// 240602 : Press F11 버튼 눈에띄게 setInterval로 반짝이게 만듦
import { Link } from 'react-router-dom';
import UserNav from './UserNav';
import { useEffect } from 'react';

export default function Main() {
  useEffect(()=>{
    const blink = document.getElementsByClassName('blink');
    let isBlank = true;
    const blinkInterval = setInterval(() => {
      if (isBlank) {
        blink[0].style.color = 'limegreen';
      } else {
        blink[0].style.color = 'white';
      }
      isBlank = !isBlank;
    }, 300);
    return () => clearInterval(blinkInterval); 
  },[])
  return (
    <div style={{ height: '100%' }}>
      <UserNav />
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>TACO</div>
          <div style={{ fontSize: '1.2rem' }}>코딩 연습 커뮤니티</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
          }}
        >
          <span className="blink">{'<< Press F11 To FullScreen >>'}</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '5rem',
            marginBottom: '5rem',
          }}
        >
          <Link
            style={{
              border: '0.5rem dashed white',
              padding: '8rem 10rem',
              fontSize: '2rem',
            }}
            to={'/longcode'}
            className="link-tag"
          >
            공식
          </Link>
          <Link
            style={{
              border: '0.5rem dashed white',
              padding: '8rem 10rem',
              fontSize: '2rem',
            }}
            to={'/custom'}
            className="link-tag"
          >
            커스텀
          </Link>
        </div>
      </div>
    </div>
  );
}
