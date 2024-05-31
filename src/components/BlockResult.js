//빈칸퀴즈 결과 - 담당자 임채윤 (최종수정: 240524)
import { useLocation, useNavigate } from "react-router-dom"
import useTyping from "../hook/useTyping";

export default function BlockResult(){
    const { state } = useLocation();
    const navigate = useNavigate();
    const { time, correctCount, totalCount, codeId } = state;
    const score = (correctCount / totalCount) * 100;
    const minute = parseInt(time/60);
    const second = time%60;
    const {refreshBlankAvgScore} = useTyping();
    const handleClick = () => {
        refreshBlankAvgScore(codeId, score).then(res=>{
            console.log(res.data);
        })
        navigate('/blockcode');
    }
    return (
        <div style={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'7rem', border:'0.5rem solid white'}}>
                <div style={{fontSize:'3rem', fontWeight:'600', marginBottom:'3rem'}}>Result</div>
                <p style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>시간: {minute}분 {second}초</p>
                <p style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>점수: {score}점</p>
                <p style={{fontSize:'1.5rem'}}>정답 {correctCount} 문제 / 총 {totalCount} 문제</p>
            </div>
            <button onClick={handleClick} style={{borderStyle:'none', fontSize:'1.3rem', padding:'1.2rem', marginTop:'3rem', borderRadius:'1rem'}}>완료하기</button>
        </div>
    );
}