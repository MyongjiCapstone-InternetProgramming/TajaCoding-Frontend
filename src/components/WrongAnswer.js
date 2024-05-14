// 담당자 : 은희
//수업시간 내용 : onmouseover 사용

import { Link } from 'react-router-dom';
import UserNav from './UserNav';
import styles from '../css/DotBorder.css'; // CSS 모듈 임포트

export default function WrongAnswer() {
  const rows = Array.from({length: 10}, (_, i) => (
    <tr key={i} className="dashed-row">
        <td>{`Row ${i + 1}, Col 1`}</td>
        <td>{`Row ${i + 1}, Col 2`}</td>
        <td>{`Row ${i + 1}, Col 3`}</td>
    </tr>
));

  return (
    <div style={{ height: '100%' }}>
      <UserNav />
      <div style={{ marginTop: '50px', padding: '0.5rem 8rem', fontSize: '80px' }}>
        오답노트
      </div>

      <div style={{display: 'flex',padding: '5rem',position: 'absolute',top: '120px',right: '40px',}}>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}>
          COMPUTER_SCIENCE
        </div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}>
          JAVA
        </div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}>
          PYTHON
        </div>
        <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}>
          C
        </div>
        <div style={{ fontSize: '1.8rem', color: 'white' }}
          onMouseOver={(e) => (e.target.style.color = 'limegreen')}
          onMouseOut={(e) => (e.target.style.color = 'white')}>
          C++
        </div>
      </div>
      <div style={{display: 'flex',justifyContent: 'space-evenly',marginTop: '2rem',marginBottom: '0rem',}}>
      </div>
      <div style={{padding:20}}>
                <div className="scroll-container"style={{maxHeight: '35rem', overflowY: 'auto'}}> {/* 스크롤 컨테이너 */}
                    <table className="dashed-table" style={{width: '90%', fontSize: '1.5em'}}>
                        <thead>
                        <tr className="dashed-row">
                            <th>SUBJECT</th>
                            <th>QUESTION</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </table>
                </div>
            </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly',marginTop: '1rem',marginBottom: '0rem',}}>
        <Link style={{ fontSize: '2rem' }}
          to="/wronganswerretry"
          className="link-tag">
          RETRY
        </Link>
      </div>
    </div>
  );
}
