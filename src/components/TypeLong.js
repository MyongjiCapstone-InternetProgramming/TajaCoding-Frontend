import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import TypingLayout from "./layout/typinglayout";
import jsonData from "../data/longtest.json"

export default function TypeLong(){
    const [data, setData] = useState(jsonData.content);
    const [timer, setTimer] = useState(0);
    const [inputLines, setInputLines] = useState(Array(data.length).fill(''));
    const [currentLine, setCurrentLine] = useState(0); // 현재 타이핑중인 줄의 인덱스
    const [accuracy, setAccuracy] = useState(100);
    const handleKeyDown = (event) => { //event 속성을 사용해 Enter키를 인식하고 Enter가 인식되면 다음줄로 넘어감
        if(event.key === 'Enter'){
            setCurrentLine(prev=>{
                return prev = prev + 1;
            }); 
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
    const enteredData = data[currentLine-1];
    return (
        <div style={{height: '100%'}}>
            <UserNav/>
            <TypingLayout timer={timer} accuracy={accuracy}>
                <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'85%', height:'79%', display:'flex', flexDirection:'column', marginTop:'1rem',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 97%, rgba(0,0,0,0) 100%)',
                    }}>
                        {/* 입력 완료된 줄 */}
                        <Line enteredText={enteredLine} enteredData={enteredData}/> 
                        {visibleLine.map((value, index)=>(
                            <Line key={index} index={index} text={value} dataIndex={index+currentLine} inputLines={inputLines} setInputLines={setInputLines}/>
                        ))}
                    </div>
                </div>
            </TypingLayout>
        </div>
    )
}

const Line = ({text, index, dataIndex, inputLines, setInputLines, enteredText, enteredData}) => {
    const [inputValue, setInputValue] = useState("");
    const [wrongCount, setWrongCount] = useState(0);
    const handleChange = (event) => {
        const newString = [...inputLines];
        newString[dataIndex] = event.target.value;
        setInputLines(newString);
        setInputValue(event.target.value);
    }
    const handleKeyDown = (event) => { //event 속성을 사용해 Enter키를 인식하고 Enter가 인식되면 다음줄로 넘어감
        if(event.key === 'Enter'){
            setInputValue("");
        }
    }
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown); //window객체의 addEventListener 사용으로 keydown 감지
        return()=>{
            window.removeEventListener('keydown', handleKeyDown);
        }
    },[])
    return (
        <div style={{height:'25%', display:'flex', flexDirection: 'column', justifyContent:'space-between'}}> 
            {!enteredData?(
                <div style={index===0?{border:'0.5rem solid white', flex:1, color:'limegreen', display:'flex', alignItems:'center', paddingLeft:'1rem', fontSize:'1.3rem'}:
                index>0?{border:'0.5rem dashed #FFFFFF77', flex:1, color:'green', display:'flex', alignItems:'center', paddingLeft:'1rem', fontSize:'1.3rem', transform:'scale(0.98, 0.98)'}:{}}>{text}</div>
            ):(
                <div style={{border:'0.5rem solid #FFFFFF77', flex:1, color:'green', display:'flex', alignItems:'center', paddingLeft:'1rem', fontSize:'1.3rem', transform:'scale(0.98, 0.98)'}}>{enteredData}</div>
            )}
            {!enteredText?(
                <input value={inputValue} maxLength={text} onChange={handleChange} disabled={index===0?undefined:true} style={index===0?{paddingLeft:'1rem', fontSize:'1rem', backgroundColor:'black', color:'white', borderStyle:'none', borderBottom:'0.2rem solid white', flex:1, marginBottom:'1.5rem'}:
                index>0?{paddingLeft:'1rem', fontSize:'1rem', backgroundColor:'black', color:'white', borderStyle:'none', borderBottom:'0.2rem solid #FFFFFF77', flex:1, marginBottom:'1.5rem', transform:'scale(0.98, 0.98)'}:
                {backgroundColor:'black', borderStyle:'none', flex:1}}></input>
            ):(
                <div style={{paddingLeft:'1rem', fontSize:'1rem',color:'#FFFFFF77', borderStyle:'none', borderBottom:'0.2rem solid #FFFFFF77', flex:1, marginBottom:'1.5rem', alignItems:'center', display:'flex', transform:'scale(0.98, 0.98)'}}>{enteredText}</div>
            )}
        </div>
    )
}