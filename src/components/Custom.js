// 담당자 : 은희
//수업시간 내용 : onmouseover 사용

import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import custom from "../custom.json";

export default function Custom() {

    const dataset = custom
    const NewDataset = dataset.map((item, index) => (
        <tr key={index} className="dashed-row">
          <td>{item.title}</td>
          <td>{item.descipt}</td>
          <td>{item.like}</td>
          <td>{item.avg}</td> 
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
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = 'white'}>JAVA
                </div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = 'white'}>PYTHON
                </div>
                <div style={{ marginRight: '3rem', fontSize: '1.8rem', color: 'white' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = 'white'}>C
                </div>
                <div style={{ fontSize: '1.8rem', color: 'white' }}
                    onMouseOver={(e) => e.target.style.color = 'lime'}
                    onMouseOut={(e) => e.target.style.color = 'white'}>C++
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