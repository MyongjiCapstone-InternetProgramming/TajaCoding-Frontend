import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import TypingLayout from "./layout/typinglayout";
import jsonData from "../data/longtest.json"

export default function TypeLong(){
    const [data, setData] = useState(jsonData.content);
    const [timer, setTimer] = useState(0);
    const [inputLines, setInputLines] = useState(Array(data.length).fill(''));
    const [currentLine, setCurrentLine] = useState(0); // 현재 타이핑중인 줄의 인덱스
    const handleKeyDown = (event) => { //event 속성을 사용해 Enter키를 인식하고 Enter가 인식되면 다음줄로 넘어감
        if(event.key === 'Enter'){
            setCurrentLine(prev=>prev + 1); 
        }
    }
    useEffect(()=>{
        const timerInterval = setInterval(()=>{
            setTimer(prev=>prev+1);
        },1000)
        window.addEventListener('keydown', handleKeyDown); //window객체의 addEventListener 사용으로 keydown 감지
        return()=>{
            clearInterval(timerInterval);
            window.removeEventListener('keydown', handleKeyDown);
        }
    },[])
    const visibleLine = data.slice(currentLine, currentLine+3);
    const enteredLine = inputLines[currentLine-1];
    return (
        <div style={{height: '100%'}}>
            <UserNav/>
            <TypingLayout timer={timer}>
                <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'85%', height:'78%'}}>
                        {/* 입력 완료된 줄 */}
                        <Line enteredText={enteredLine}/> 
                        {visibleLine.map((value, index)=>(
                            <Line key={index} index={index} text={value} dataIndex={index+currentLine} inputLines={inputLines} setInputLines={setInputLines}/>
                        ))}
                    </div>
                </div>
            </TypingLayout>
        </div>
    )
}

const Line = ({text, index, dataIndex, inputLines, setInputLines, enteredText}) => {
    const handleChange = (event) => {
        const newString = [...inputLines];
        newString[dataIndex] = event.target.value;
        setInputLines(newString);
    }
    return (
        <div style={{height:'25%', display:'flex', flexDirection: 'column', justifyContent:'space-between'}}> 
            <div style={{border:'0.5rem dashed white', flex:1, color:'limegreen'}}>{text}</div>
            {!enteredText?(
                <input onChange={handleChange} disabled={index===0?undefined:true} style={{backgroundColor:'black', color:'white', borderStyle:'none', borderBottom:'0.2rem solid white', flex:1, marginBottom:'1.5rem'}}></input>
            ):(
                <div style={{backgroundColor:'black', color:'white', borderStyle:'none', borderBottom:'0.2rem solid white', flex:1, marginBottom:'1.5rem'}}>{enteredText}</div>
            )}
        </div>
    )
}