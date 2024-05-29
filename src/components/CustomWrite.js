// 담당자 : 은희
import { useState } from 'react';
import UserNav from "./UserNav";

export default function CustomWrite(){
    const [userTitle, setUserTitle] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userCode, setUserCode] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('java');
    const id_writer = 1

    const handleRegist = () => {
        const codeLines = userCode.split('\n');

        const result = {
            title: userTitle,
            descript: userDescription,
            content: codeLines,
            language: selectedLanguage,
            writer: id_writer
        };
        console.log(result);
        window.history.back();
    }
    return(
        <div style={{height:'100%'}}>
            <UserNav/>
            <div style={{  marginTop: '30px',marginBottom: '10px',padding: '0.5rem 10rem', fontSize: '65px',height: '10%' }}>
                Custom WRITE
           </div>
           <div style={{ padding: '0.5rem 30rem' }}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: 'white', fontSize: '20px', display: 'block', marginBottom: '5px' }}>TITLE</label>
                    <input
                        type="text"
                        onChange={(e) => setUserTitle(e.target.value)}
                        placeholder="제목을 입력하세요."
                        style={{width: '100%',padding: '10px', fontSize: '20px',border: '0.5rem solid white',backgroundColor: 'black',color: 'white',boxSizing: 'border-box'}}/>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: 'white', fontSize: '20px', display: 'block', marginBottom: '5px' }}>DESCRIPTION</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}> 
                        <input
                            type="text"
                            onChange={(e) => setUserDescription(e.target.value)}
                            placeholder="간단한 설명을 입력하세요."
                            style={{ flex: 1, width: '100%',padding: '10px',fontSize: '20px',border: '0.5rem solid white',backgroundColor: 'black',color: 'white',boxSizing: 'border-box'}}/>
                        <select
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            style={{marginLeft: '10px', padding: '10px', fontSize: '20px', border: '0.5rem solid white', backgroundColor: 'black', color: 'white', boxSizing: 'border-box'}}
                        >
                        <option value="java">JAVA</option>
                        <option value="c++">C++</option>
                        <option value="c">C</option>
                        <option value="python">PYTHON</option>
                    </select>
                    </div> 

                </div>
            </div>

            <div style={{ padding: '0.5rem 20rem' }}>
                <div>
                    <textarea
                        placeholder="코드(문제)를 입력하세요."
                        onChange={(e) => setUserCode(e.target.value)}
                        style={{ width: '100%', height: '350px',padding: '10px',fontSize: '20px',border: '0.5rem dashed white',backgroundColor: 'black',color: 'white',boxSizing: 'border-box'}}>
                    </textarea>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', marginBottom: '0rem' }}>
                <div style={{ fontSize: '2rem' }} className="retry-button-tag" onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')} onClick={handleRegist}>작성완료</div>
                </div>
            </div>
        </div>
    );
}
