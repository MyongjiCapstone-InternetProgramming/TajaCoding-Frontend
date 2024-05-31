// 빈칸타자연습 - 담당자 : 채윤 240523
// 최종수정 240531 : DB 컨텐츠 연결
import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import TypingLayout from "./layout/typinglayout";
import jsonData from "../data/blocktest.json"
import { useNavigate, useParams } from "react-router-dom";
import useTyping from "../hook/useTyping";

export default function TypeBlock(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(jsonData.content);
    const [example, setExample] = useState(jsonData.example);
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
        if (answers.A==='' || answers.B==='' || answers.C==='' || answers.D===''){
            return alert('빈칸이 존재합니다');
        } else{
            const problemCount = resultData.length;
            let answerCount = 0;
            const userAnswers = Object.values(answers); // Object 객체의 values 메소드를 통해 값들 가져오기
            userAnswers.map((value, index)=>{
                if (value===resultData[index]) {
                    answerCount++;
                }
            })
            navigate('/block-result', { state: { time: timer, correctCount: answerCount, totalCount:problemCount, codeId:id } })
        }
    }
    const {getBlankType} = useTyping();
    useEffect(()=>{
        getBlankType(id).then(res=>{
            console.log(res.data);
            setData(res.data.content);
            setExample(res.data.example);
            setResultData(res.data.result);
        })
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
                        <div style={{ height: '85%', overflowY:"scroll", width: '60%', fontSize:'1.3rem'}}>
                            {data.map((value, index) => {
                                const formatLine = value
                                .replace(/</g, '&lt;') // '<' 문자를 '&lt;'로 치환
                                .replace(/>/g, '&gt;') // '>' 문자를 '&gt;'로 치환
                                .replace(/\(\s+[A-D]\s+\)/g, (match) => { //replace를 통해 문제 빈칸을 span태그로 감싸게 만듦
                                    return `<span style="color: #32CD32; font-size:1.5rem; font-weight:600">${match}</span>`;
                                });
                                return (
                                    <div dangerouslySetInnerHTML={{__html: formatLine}} key={index} style={{display:'flex',flex:1, alignItems:'center', padding: '10px', borderBottom: '1px solid #ccc', height:'8%'}}></div>
                                )})}
                        </div>
                        <div style={{height: '82%', width:'25%', border:'0.2rem solid white', margin:'1rem', padding:'1rem'}}>
                            <div style={{fontSize:'1.4rem', color:'limegreen'}}>출력 예시</div>
                            <div style={{fontSize:'1.4rem', color:'limegreen'}}>-----------------</div>
                            {example.map((letter,index)=>(
                                <div key={index} style={{fontSize:'1.4rem', color:'limegreen'}}>
                                    {letter}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{display:'flex', flex:2,justifyContent:'space-evenly', alignItems:'center', marginBottom:'2rem'}}>
                        {resultData.map((letter, index) => (
                            <div key={index} style={{fontSize:'1.5rem'}}>
                                {String.fromCharCode(index+65)} : <input placeholder={letter.length+'글자'} name={String.fromCharCode(index+65)} value={answers[String.fromCharCode(index+65)]} onChange={handleInputChange} style={{padding:'1.4rem'}}/>
                            </div>
                        ))}
                        <button type="submit" onClick={handleSubmit} style={{borderStyle:'none', padding:'1.5rem', borderRadius:'1rem', backgroundColor:'skyblue'}}>완료</button>
                    </div>
                </div> 
            </TypingLayout>
        </div>
    )
}