// 담당자 : 민석
//수업시간 내용 : onmouseover 사용

import {Link} from "react-router-dom";
import UserNav from "./UserNav";
import styles from '../css/DotBorder.css'; // CSS 모듈 임포트

export default function WordQuiz() {
    const rows = Array.from({length: 10}, (_, i) => (
        <tr key={i} className="dashed-row">
            <td>{`Row ${i + 1}, Col 1`}</td>
            <td>{`Row ${i + 1}, Col 2`}</td>
            <td>{`Row ${i + 1}, Col 3`}</td>
            <td>{`Row ${i + 1}, Col 4`}</td>
        </tr>
    ));

    return (
        <div style={{height: '100%'}}>
            <UserNav/>
            <div style={{marginTop: '50px', padding: '0.5rem 8rem', fontSize: '80px'}}>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}}
                     onMouseOver={(e) => e.target.style.color = 'limegreen'}
                     onMouseOut={(e) => e.target.style.color = 'white'}>-> SELECT * FROM 긴글 코딩 연습;
                </div>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}}
                     onMouseOver={(e) => e.target.style.color = 'limegreen'}
                     onMouseOut={(e) => e.target.style.color = 'white'}>-> SELECT * FROM 빈칸 퀴즈;
                </div>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}}
                     onMouseOver={(e) => e.target.style.color = 'limegreen'}
                     onMouseOut={(e) => e.target.style.color = 'white'}>-> SELECT * FROM 개념 퀴즈;
                </div>
            </div>


            <div style={{display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px'}}>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}}
                     onMouseOver={(e) => e.target.style.color = 'limegreen'}
                     onMouseOut={(e) => e.target.style.color = 'white'}>JAVA
                </div>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}}
                     onMouseOver={(e) => e.target.style.color = 'limegreen'}
                     onMouseOut={(e) => e.target.style.color = 'white'}>PYTHON
                </div>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}}
                     onMouseOver={(e) => e.target.style.color = 'limegreen'}
                     onMouseOut={(e) => e.target.style.color = 'white'}>C
                </div>
                <div style={{fontSize: '1.8rem', color: 'white'}}
                     onMouseOver={(e) => e.target.style.color = 'limegreen'}
                     onMouseOut={(e) => e.target.style.color = 'white'}>C++
                </div>
            </div>
            <div style={{padding: 100}}>
                <div className="scroll-container"> {/* 스크롤 컨테이너 */}
                    <table className="dashed-table">
                        <thead>
                        <tr className="dashed-row">
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>DIFFICULT</th>
                            <th>AVERAGE_TIME</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}