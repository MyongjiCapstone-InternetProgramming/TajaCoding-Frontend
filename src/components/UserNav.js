// 채윤 (마지막 수정 : 2024-04-29)

import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

/* 뒤로가기 기능과 UserNavigation 구현
뒤로가기는 window의 location 객체 속성 중 pathname을 사용하여 현재 경로(path)가 메인화면'/'인 경우 외엔 모두 표시. 삼항연산자로 이를 표기
로그인, 회원가입 페이지는 로그인 한 유저에 대해서는 '로그아웃' 창? 근데 현재 회원을 만들필요가 없어졌다. */
export default function UserNav(){
    const currentPath = window.location.pathname;
    const handleBackPage = () => {
        window.history.back();
    }
    return(
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'1rem', fontWeight:'600', marginTop:'1.3rem', marginRight:'2rem'}}>
            {currentPath === '/' ? <div></div> : <MdArrowBack size={'1.9rem'} style={{marginLeft:'1.5rem', cursor:'pointer'}} onClick={handleBackPage}/> }
            <div>
                <Link to={'/login'} className="link-tag" style={{marginRight:'1.5rem'}}>로그인</Link>  
                <Link to={'/signup'} className="link-tag">회원가입</Link>  
            </div>
        </div>
    )
}