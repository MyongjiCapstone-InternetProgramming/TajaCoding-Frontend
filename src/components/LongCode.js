import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import longcode from "../longcode";


export default function LongCode() {

    const dataset = longcode

    const NewDataset = dataset.map((item, index) => (
        <tr key={index} className="dashed-row">
          <td>{item.title}</td>
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
                height: '20%',
            }}>
        
            <Link to={'/longcode'} style={{ textDecoration: 'none' }}>
                <div
                        style={{
                            padding: '0.5rem 8rem',
                            fontSize: '20px',
                            color: 'limegreen',
                            textDecoration: 'none',
                            marginTop: '30px'
                        }}
                        // onMouseOut={(e) => (e.target.style.color = 'limegreen')}
                        // onMouseOver={(e) => (e.target.style.color = 'white')}
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
                    onMouseOver={(e) => (e.target.style.color = 'lime')}
                    onMouseOut={(e) => (e.target.style.color = 'white')}
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
            <div style={{ padding: 100 }}>
                <div className="scroll-container" style={{ maxHeight: '27rem', overflowY: 'auto' }}> {/* 스크롤 컨테이너 */}
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