// 담당자 : 민석
//수업시간 내용 : onmouseover 사용

import { Link,useNavigate  } from "react-router-dom";
import UserNav from "./UserNav";
import {useEffect, useState } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export default function BlockCode() {
    // 언어 선택 변수 상태
    const [selectedOption, setSelectedOption] = useState('JAVA');
    const [blockcode, setBlockcode] = useState([]);

    // 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/blankcode`);
                setBlockcode(response.data.data);
            } catch (error) {
                console.error('Error fetching longcode data:', error);
            }
        };
        fetchData();
    }, [selectedOption]);


    // 타이틀 선택시 이동
    const navigate  = useNavigate ();

    const handleTitleClick = (index) => {
        if(!selectedOption) 
            alert('언어를 선택해주세요');
        else
            navigate(`/type-block/${index}`);
            // navigate(`/type-block/${selectedOption}/${index}`);  // {/* 타이틀 선택시 -> type-long으로 옮겨지면서 ID 값 반환  */ }
    };

    const filteredDataset = blockcode.filter(item => item.language === selectedOption);
    const NewDataset = filteredDataset.map((item, index) => (
        <tr key={index} className="dashed-row">
            <td 
            onClick={() => handleTitleClick(item.id)}
            onMouseOver={(e) => (e.target.style.color = 'lime')}
            onMouseOut={(e) => (e.target.style.color = 'white')}>
            {item.title} </td>
            <td>{item.descript}</td>
            <td>{item.difficulty}</td>
            <td>{item.averageScore === 0 ? '기록이 없습니다.' : `${item.averageScore}점`}</td>
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
                <div style={{ fontSize: '1.8rem', color: selectedOption === 'CPP' ? 'limegreen' : 'white', cursor:'pointer' }} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = selectedOption === 'CPP' ? 'lime' : 'white')} onClick={()=>{setSelectedOption('CPP')}}>C++</div>
            </div>
            
            <div style={{ paddingRight:100, paddingLeft:100  }}>
                <div className="scroll-container" style={{ maxHeight: '27rem', overflowY: 'auto' }}> 
                {/* 스크롤 컨테이너 */}
                    <table className="dashed-table">
                        <thead>
                            <tr className="dashed-row">
                                <th>TITLE</th>
                                <th>DESCRIPTION</th>
                                <th>DIFFICULTY</th>
                                <th>AVERAGE_SCORE</th>
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