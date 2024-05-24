// 타자연습 결과 - 담당자 : 채윤 최종수정 240523
import { useLocation, useNavigate } from "react-router-dom"

export default function LongResult(){
    const { state } = useLocation();
    const navigate = useNavigate();
    const { time, correctCount, totalCount } = state;
    const accuracy = (correctCount / totalCount) * 100;
    const minute = parseInt(time/60);
    const second = time%60;
    const handleClick = () => {
        navigate('/longcode');
    }
    return (
        <div style={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'7rem', border:'0.5rem solid white'}}>
                <div style={{fontSize:'3rem', fontWeight:'600', marginBottom:'3rem'}}>Result</div>
                <p style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>시간: {minute}분 {second}초</p>
                <p style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>정확도: {accuracy.toFixed(2)}%</p>
                <p style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>총 {totalCount} 글자</p>
                <p style={{fontSize:'1.5rem'}}>오답 {totalCount-correctCount} 글자</p>
            </div>
            <button onClick={handleClick} style={{borderStyle:'none', fontSize:'1.3rem', padding:'1.2rem', marginTop:'3rem', borderRadius:'1rem'}}>완료하기</button>
        </div>
    );
}