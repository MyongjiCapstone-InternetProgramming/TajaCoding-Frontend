// 담당자 : 은희
//수업시간 내용 : onmouseover 사용

import { Link, useNavigate } from "react-router-dom";
import UserNav from "./UserNav";
import custom from "../custom.json";
import { useEffect, useState } from 'react';
import useCustom from "../hook/useCustom";

export default function Custom() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('JAVA');
    const {getCustom} = useCustom();
    const [dataset, setDataset] = useState([]);
    const userId = localStorage.getItem('id');

    useEffect(()=>{
        getCustom(selectedOption).then(res=>{
            setDataset(res.data);
            console.log(res.data);
        })
    },[selectedOption])
    // const dataset = custom[selectedOption] // => 자바 데이터들을 가져옴 (배열로)
/*     if (dataset) {
        
    } */
     const NewDataset = dataset.map((item, index) => (
        <tr key={index} className="dashed-row">
          <td className='clickable-subject' onClick={()=>navigate(`/type-custom/${item.codeId}`)} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>{item.title}</td>
          <td className='clickable-subject' onClick={()=>navigate(`/type-custom/${item.codeId}`)} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>{item.descript}</td>
          <td>{item.writer}</td>
          <td>{item.averageTime === 0 ? '기록이 없습니다.' : `${item.averageTime}초`}</td> 
        </tr>
      )); 


    return (
        <div style={{ height: '100%' }}>
            <UserNav />
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'flex-start',height: '30%'}}>
                <Link to={'/custom'} style={{ textDecoration: 'none' }}>
                    <div style={{ marginTop: '30px',padding: '0.5rem 8rem',fontSize: '20px',color: 'limegreen', textDecoration: 'none'}}
                    >SELECT * FROM 커스텀_목록;
                    </div>
                </Link>
                <div style={{ textDecoration: 'none', cursor:'pointer' }} onClick={()=>{
                    const userId = localStorage.getItem('id');
                    if (!userId) {
                        return window.alert('글쓰기는 회원만 가능합니다.');
                    }
                    navigate('/customwrite');
                }}>
                    <div style={{ padding: '0.5rem 8rem',fontSize: '20px',color: 'white', textDecoration: 'none'}}onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}
                    >INSERT INTO 내_코드 FROM 커스텀_목록;
                    </div>
                </div>
                <div style={{ textDecoration: 'none', cursor:'pointer' }} onClick={()=>{
                    const userId = localStorage.getItem('id');
                    if (!userId) {
                        return window.alert('본인 글 확인은 회원만 가능합니다.');
                    }
                    navigate('/customdelete');
                }}>
                    <div style={{ padding: '0.5rem 8rem',fontSize: '20px',color: 'white', textDecoration: 'none'}}onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}
                    >DELETE 코드 FROM 커스텀_목록 WHERE NICKNAME = {userId};
                    </div>
                </div>
            </div>


            <div style={{ display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px' }}>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'JAVA' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => (e.target.style.color = selectedOption === 'JAVA' ? 'limegreen' : 'white')}
                    onClick={()=>{setSelectedOption('JAVA')}}>JAVA
                </div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'PYTHON' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = selectedOption === 'PYTHON' ? 'limegreen' : 'white'}
                    onClick={()=>{setSelectedOption('PYTHON')}}>PYTHON
                </div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'C' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = selectedOption === 'C' ? 'limegreen' : 'white'}
                    onClick={()=>{setSelectedOption('C')}}>C
                </div>
                <div style={{ fontSize: '1.8rem', color: selectedOption === 'CPP' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = selectedOption === 'CPP' ? 'limegreen' : 'white'}
                    onClick={()=>{setSelectedOption('CPP')}}>C++
                </div>
            </div>

            <div style={{ paddingRight:100, paddingLeft:100 }}>
                <div className="scroll-container" style={{ maxHeight: '27rem', overflowY: 'auto' }}> {/* 스크롤 컨테이너 */}
                    <table className="dashed-table">
                        <thead>
                            <tr className="dashed-row">
                                <th>TITLE</th>
                                <th>DESCRIPTION</th>
                                <th>WRITER</th>
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