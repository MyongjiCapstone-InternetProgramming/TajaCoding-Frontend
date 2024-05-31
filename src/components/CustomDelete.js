// 담당자 : 은희, 정준

import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import custom from "../custom.json";
import { useEffect, useState } from 'react';
import useCustomDel from '../hook/useCustomDel';

export default function CustomDelete() {
    const [selectedOption, setSelectedOption] = useState('JAVA');
    const {getCustomDel, deleteCustomDel} = useCustomDel();
    const [dataset, setDataset] = useState([]);
    useEffect(()=>{
        getCustomDel(selectedOption).then(res=>{
            setDataset(res.data);
            console.log(res.data);
        })
    },[selectedOption])
    const handleDelete = async (codeId) => {
        try {
            const response = await deleteCustomDel(codeId);
            if (response.status === 200) {
                // 삭제 요청이 성공한 경우에만 데이터셋을 업데이트합니다.
                setDataset(prevDataset => prevDataset.filter(item => item.codeId !== codeId));
                alert("선택한 문제를 삭제했습니다.");
            } else {
                alert("문제 삭제 중에 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error("문제 삭제 중에 오류가 발생했습니다.", error);
            alert("문제 삭제 중에 오류가 발생했습니다.");
        }
    };
    
    const NewDataset = dataset.map((item, index) => (
        <tr key={index} className="dashed-row">
          <td>{item.title}</td>
          <td>{item.descript}</td> 
          <td onClick={()=>handleDelete(item.codeId)} style={{cursor:'pointer'}} onMouseOver={(e) => (e.target.style.color = 'red')} onMouseOut={(e) => (e.target.style.color = 'white')}>{'DELETE'}</td>
        </tr>
      ));

    return (
        <div style={{ height: '100%' }}>
            <UserNav />
            <div style={{  marginTop: '60px',marginBottom: '60px',padding: '0.5rem 10rem', fontSize: '65px',height: '10%' }}>
                Custom DELETE
            </div>


            <div style={{ display: 'flex', padding: '5rem', position: 'absolute', top: '120px', right: '40px' }}>
            <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'JAVA' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => (e.target.style.color = selectedOption === 'JAVA' ? 'lime' : 'white')}
                    onClick={()=>{setSelectedOption('JAVA')}}>JAVA
                </div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'PYTHON' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = selectedOption === 'PYTHON' ? 'lime' : 'white'}
                    onClick={()=>{setSelectedOption('PYTHON')}}>PYTHON
                </div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: selectedOption === 'C' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = selectedOption === 'C' ? 'lime' : 'white'}
                    onClick={()=>{setSelectedOption('C')}}>C
                </div>
                <div style={{ fontSize: '1.8rem', color: selectedOption === 'Cpp' ? 'limegreen' : 'white', cursor:'pointer' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = selectedOption === 'Cpp' ? 'lime' : 'white'}
                    onClick={()=>{setSelectedOption('Cpp')}}>C++
                </div>
            </div>

            <div style={{ paddingRight:100, paddingLeft:100 }}>
                <div className="scroll-container" style={{ maxHeight: '27rem', overflowY: 'auto' }}> {/* 스크롤 컨테이너 */}
                    <table className="dashed-table">
                        <thead>
                            <tr className="dashed-row">
                                <th>TITLE</th>
                                <th>DESCRIPTION</th>
                                <th>DELETE</th>
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
