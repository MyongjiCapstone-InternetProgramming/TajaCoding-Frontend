// 긴글타자연습 - 담당자 : 채윤 최종수정 240523
import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import TypingLayout from "./layout/typinglayout";
import jsonData from "../data/longtest.json"
import { useNavigate, useParams } from "react-router-dom";

export default function TypeLong(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(jsonData.content);
    const [timer, setTimer] = useState(0);
    const [inputLines, setInputLines] = useState(Array(data.length).fill(''));
    const [currentLine, setCurrentLine] = useState(0); // 현재 타이핑중인 줄의 인덱스
    const [enteredData, setEnteredData] = useState(data[currentLine-1])
    const [enteredLine, setEnteredLine] = useState(inputLines[currentLine-1]);
    const [totalCount, setTotalCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    useEffect(() => {
        if (currentLine > data.length - 1) {
            navigate('/long-result', { state: { time: timer, correctCount: correctCount, totalCount:totalCount } });
        }
    }, [currentLine, correctCount, totalCount, timer, navigate, data.length]);
    const handleKeyDown = (event) => { //event 속성을 사용해 Enter키를 인식하고 Enter가 인식되면 다음줄로 넘어감
        if(event.key === 'Enter'){
            setCurrentLine(prev => prev + 1);
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
    useEffect(()=>{
        setEnteredLine(currentLine===0?"":inputLines[currentLine-1])
        setEnteredData(currentLine===0?"":data[currentLine-1])
    }, [currentLine])
    return (
        <div style={{height: '100%'}}>
            <UserNav/>
            <TypingLayout timer={timer} accuracy={correctCount/totalCount*100}>
                <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'85%', height:'79%', display:'flex', flexDirection:'column', marginTop:'1rem',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 97%, rgba(0,0,0,0) 100%)',
                    }}>
                        {/* 입력 완료된 줄 */}
                        <EnteredLine enteredLine={enteredLine} enteredData={enteredData} currentLine={currentLine} setTotalCount={setTotalCount} setCorrectCount={setCorrectCount}/> 
                        {visibleLine.map((value, index)=>{
                            if (index===0){return (<Line key={index} index={index} text={value} dataIndex={index+currentLine} inputLines={inputLines} setInputLines={setInputLines}/>)}
                            else {return (<BeforeLine key={index} text={value}/>)}
                        })}
                    </div>
                </div>
            </TypingLayout>
        </div>
    )
}

const EnteredLine = ({enteredData,enteredLine,currentLine,setTotalCount,setCorrectCount}) => {
    useEffect(()=>{
        let minLength = Math.min(enteredData?.length, enteredLine?.length);
        let count = 0;
        for (let i=0; i<minLength; i++){
            if (enteredData[i] === enteredLine[i]){
                count++
            }
        }
        if (currentLine !== 0) {
            setTotalCount(prev => prev + enteredData?.length);
            setCorrectCount(prev => prev + count);
        }
    },[enteredData, enteredLine, currentLine, setTotalCount, setCorrectCount])
    return (
        <div style={{height:'25%', display:'flex', flexDirection: 'column', justifyContent:'space-between'}}> 
            <div style={{border:'0.5rem solid #FFFFFF77', flex:1, color:'green', display:'flex', alignItems:'center', paddingLeft:'1rem', fontSize:'1.3rem', transform:'scale(0.98, 0.98)'}}>{enteredData}</div>
            <div style={{paddingLeft:'1rem', fontSize:'1.3rem',color:'#FFFFFF77', borderStyle:'none', borderBottom:'0.2rem solid #FFFFFF77', flex:1, marginBottom:'1.5rem', alignItems:'center', display:'flex', transform:'scale(0.98, 0.98)'}}>{enteredLine}</div>
        </div>
    )
}

const Line = ({text, index, dataIndex, inputLines, setInputLines}) => {
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
            <div style={{border:'0.5rem solid white', flex:1, color:'limegreen', display:'flex', alignItems:'center', paddingLeft:'1rem', fontSize:'1.3rem'}}>{text}</div>
            <input value={inputValue} maxLength={text} onChange={handleChange} style={{fontFamily:'Nanum Gothic Coding', paddingLeft:'1rem', fontSize:'1.3rem', backgroundColor:'black', color:'white', borderStyle:'none', borderBottom:'0.2rem solid white', flex:1, marginBottom:'1.5rem'}}></input>
        </div>
    )
}

const BeforeLine = ({text}) => {
    return (
        <div style={{height:'25%', display:'flex', flexDirection: 'column', justifyContent:'space-between'}}> 
            <div style={{border:'0.5rem dashed #FFFFFF77', flex:1, color:'green', display:'flex', alignItems:'center', paddingLeft:'1rem', fontSize:'1.3rem', transform:'scale(0.98, 0.98)'}}>{text}</div>
            <div style={{paddingLeft:'1rem', fontSize:'1.3rem', color:'white', borderStyle:'none', borderBottom:'0.2rem solid #FFFFFF77', flex:1, marginBottom:'1.5rem', transform:'scale(0.98, 0.98)'}}></div>
        </div>
    )
}