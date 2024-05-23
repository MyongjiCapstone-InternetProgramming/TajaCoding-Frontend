// 담당자 : 민석
//수업시간 내용 : onmouseover 사용

import { Link,useNavigate  } from "react-router-dom";
import UserNav from "./UserNav";
import { useState } from 'react';
import block from "../block";

export default function BlockCode() {
    // 언어 선택 변수 상태
    const [selectedOption, setSelectedOption] = useState('');

    // 타이틀 선택시 이동
    const navigate  = useNavigate ();

    const handleTitleClick = (index) => {
        if(!selectedOption) 
            alert('언어를 선택해주세요');
        else
            navigate(`/type-block/${selectedOption}/${index}`);  // {/* 타이틀 선택시 -> type-long으로 옮겨지면서 ID 값 반환  */ }
    };

    const dataset = block
    const NewDataset = dataset.map((item, index) => (
        <tr key={index} className="dashed-row">
            <td 
            onClick={() => handleTitleClick(index)}
            onMouseOver={(e) => (e.target.style.color = 'lime')}
            onMouseOut={(e) => (e.target.style.color = 'white')}>
            {item.title} </td>
            <td>{item.descipt}</td>
            <td>{item.level}</td>
            <td>{item.avg}</td>
        </tr>
    ));

    return (
        <div style={{ height: '100%' }}>
            <UserNav />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    height: '25%',
                }}
            >
                <Link to={'/longcode'} style={{ textDecoration: 'none' }}>
                    <div
                        style={{
                            marginTop: '30px',
                            padding: '0.5rem 8rem',
                            fontSize: '20px',
                            color: 'white',
                        }}
                        onMouseOver={(e) => (e.target.style.color = 'lime')}
                        onMouseOut={(e) => (e.target.style.color = 'white')}
                    >
                        SELECT * FROM 긴글 코딩 연습;
                    </div>
                </Link>
                <div>
                    <Link
                        to="/blockcode"
                        style={{
                            padding: '0.5rem 8rem',
                            fontSize: '20px',
                            color: 'limegreen',
                            textDecoration: 'none'
                        }}
                        // onMouseOut={(e) => (e.target.style.color = 'limegreen')}
                        // onMouseOver={(e) => (e.target.style.color = 'white')}
                    >
                        SELECT * FROM 빈칸 퀴즈;
                    </Link>
                </div>
                <Link to={'/wordquiz'} style={{ textDecoration: 'none' }}>

                    <div
                        style={{
                            padding: '0.5rem 8rem',
                            fontSize: '20px',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                        onMouseOver={(e) => (e.target.style.color = 'lime')}
                        onMouseOut={(e) => (e.target.style.color = 'white')}
                    >
                        SELECT * FROM 개념 퀴즈;
                    </div>
                </Link>
            </div>


            <div style={{ display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px' }}>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'JAVA' ? 'limegreen' : 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'JAVA' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('JAVA')}}>JAVA</div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'PYTHON' ? 'limegreen' : 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'PYTHON' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('PYTHON')}}>PYTHON</div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'C' ? 'limegreen' : 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'C' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('C')}}>C</div>
                <div style={{ fontSize: '1.8rem', color: selectedOption === 'Cpp' ? 'limegreen' : 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'Cpp' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('Cpp')}}>C++</div>
            </div>
            
            <div style={{ paddingRight:100, paddingLeft:100  }}>
                <div className="scroll-container" style={{ maxHeight: '27rem', overflowY: 'auto' }}> 
                {/* 스크롤 컨테이너 */}
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
                            {NewDataset}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}