// 빈칸타자연습 - 담당자 : 채윤 최종수정 240523
import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import TypingLayout from "./layout/typinglayout";
import jsonData from "../data/blocktest.json"

export default function TypeBlock(){
    const [data, setData] = useState(jsonData.content);
    const [timer, setTimer] = useState(0);
    const [resultData, setResultData] = useState(jsonData.result);

    const [answers, setAnswers] = useState({ A: '', B: '', C: '', D: '' });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (answers['A']===""||answers['B']===""||answers['C']===""||answers['D']){
            console.log('빈칸있다');
        }
    }
    useEffect(()=>{
        const timerInterval = setInterval(()=>{
            setTimer(prev=>prev+1);
        },1000)
        return()=>{
            clearInterval(timerInterval);
        }
    },[])
    return(
        <div style={{height: '100%'}}>
            <UserNav/>
            <TypingLayout timer={timer} mode={'BLOCK'} >
                <div style={{display:'flex', flex:6, height:'100%', flexDirection:'column', justifyContent:'center'}}>
                    <div style={{display:'flex', flex:6, justifyContent:'center', alignItems:'center'}}>
                        <div style={{ height: '85%', overflowY:"scroll", width: '60%', fontSize:'1.5rem'}}>
                            {data.map((value, index) => (
                                <div key={index} style={{display:'flex',flex:1, alignItems:'center', padding: '10px', borderBottom: '1px solid #ccc', height:'8%' }}>
                                    {value}
                                </div>
                            ))}
                        </div>
                        <div style={{height: '82%', width:'25%', border:'0.2rem solid white', margin:'1rem'}}></div>
                    </div>
                    <div style={{display:'flex', flex:2,justifyContent:'space-evenly', alignItems:'center', marginBottom:'2rem'}}>
                        {['A', 'B', 'C', 'D'].map((letter) => (
                            <div key={letter} style={{fontSize:'1.5rem'}}>
                                {letter} : <input name={letter} value={answers[letter]} onChange={handleInputChange} style={{padding:'1.4rem'}}/>
                            </div>
                        ))}
                        <button type="submit" onClick={handleSubmit} style={{borderStyle:'none', padding:'1.5rem', borderRadius:'1rem', backgroundColor:'skyblue'}}>완료</button>
                    </div>
                </div> 
            </TypingLayout>
        </div>
    )
}