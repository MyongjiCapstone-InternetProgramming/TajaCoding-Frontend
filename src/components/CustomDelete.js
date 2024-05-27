// 담당자 : 은희

import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import custom from "../custom.json";

export default function CustomDelete() {

    const dataset = custom
    const NewDataset = dataset.map((item, index) => (
        <tr key={index} className="dashed-row">
          <td>{item.title}</td>
          <td>{item.descipt}</td> 
          <td>{'DELETE'}</td>
        </tr>
      ));

    return (
        <div style={{ height: '100%' }}>
            <UserNav />
            <div style={{  marginTop: '60px',marginBottom: '60px',padding: '0.5rem 10rem', fontSize: '65px',height: '10%' }}>
                Custom DELETE
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
