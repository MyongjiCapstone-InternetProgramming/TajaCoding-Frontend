import { Link } from "react-router-dom";

export default function Main(){
    return (
        <div>
            <div style={{display:'flex', justifyContent:'flex-end', fontSize:'1rem', fontWeight:'600', marginTop:'1.3rem', marginRight:'2rem'}}>
                <Link to={'/login'} className="link-tag" style={{marginRight:'1.5rem'}}>로그인</Link>  
                <Link to={'/signup'} className="link-tag">회원가입</Link>  
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'3rem'}}>
                <div style={{fontSize:'5rem', marginBottom:'1rem'}}>TACO</div>
                <div style={{fontSize:'1.2rem'}}>코딩 연습 커뮤니티</div>
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'3rem'}}>
                <span>{'<< Press F11 To FullScreen >>'}</span>
            </div>
            <div>
                <Link to={'/origin'} className="link-tag">공식</Link>
                <Link to={'/custom'} className="link-tag">커스텀</Link>
            </div>
        </div>
    )
}