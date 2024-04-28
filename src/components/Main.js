// 채윤 (마지막 수정 : 2024-04-28)
import { Link } from "react-router-dom";

export default function Main(){
    return (
        <div style={{height:'100%'}}>
            <div style={{display:'flex', justifyContent:'flex-end', fontSize:'1rem', fontWeight:'600', marginTop:'1.3rem', marginRight:'2rem'}}>
                <Link to={'/login'} className="link-tag" style={{marginRight:'1.5rem'}}>로그인</Link>  
                <Link to={'/signup'} className="link-tag">회원가입</Link>  
            </div>
            <div style={{display:'flex', height:'100%', flexDirection:'column', justifyContent:'center'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div style={{fontSize:'5rem', marginBottom:'1rem'}}>TACO</div>
                    <div style={{fontSize:'1.2rem'}}>코딩 연습 커뮤니티</div>
                </div>
                <div style={{display:'flex', justifyContent:'center', marginTop:'3rem'}}>
                    <span>{'<< Press F11 To FullScreen >>'}</span>
                </div>
                <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'5rem', marginBottom:'5rem'}}>
                    <Link style={{border:"0.5rem dashed white", padding:'8rem 10rem', fontSize:'2rem'}} to={'/origin'} className="link-tag">공식</Link>
                    <Link style={{border:"0.5rem dashed white", padding:'8rem 10rem', fontSize:'2rem'}} to={'/custom'} className="link-tag">커스텀</Link>
                </div>
            </div>
        </div>
    )
}