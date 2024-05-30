// 담당자 : 은희
//수업시간 내용 : onmouseover 사용

import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import custom from "../custom.json";
import { useEffect, useState } from 'react';
import useCustom from "../hook/useCustom";

export default function Custom() {
    const [selectedOption, setSelectedOption] = useState('JAVA');
    const {getCustom} = useCustom();
    const [dataset, setDataset] = useState([]);

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
          <td className='clickable-subject' onClick={()=>{alert(`해당 문제로 이동!! (index:${index})`)}} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>{item.title}</td>
          <td className='clickable-subject' onClick={()=>{alert(`해당 문제로 이동!! (index:${index})`)}} onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}>{item.descript}</td>
          <td>{item.writer}</td>
          <td>{item.averageTime}</td> 
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
                <Link to={'/customwrite'} style={{ textDecoration: 'none' }}>
                    <div style={{ padding: '0.5rem 8rem',fontSize: '20px',color: 'white', textDecoration: 'none'}}onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}
                    >INSERT INTO 내_코드 FROM 커스텀_목록;
                    </div>
                </Link>
                <Link to={'/customdelete'} style={{ textDecoration: 'none' }}>
                    <div style={{ padding: '0.5rem 8rem',fontSize: '20px',color: 'white', textDecoration: 'none'}}onMouseOver={(e) => (e.target.style.color = 'lime')} onMouseOut={(e) => (e.target.style.color = 'white')}
                    >DELETE 코드 FROM 커스텀_목록 WHERE NICKNAME = '자기자신';
                    </div>
                </Link>
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
                                <th>LIKE</th>
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