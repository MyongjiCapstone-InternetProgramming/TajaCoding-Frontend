// 채윤 (Created : 2024-04-29)
// Updated : 2024-05-15 : 네비게이션 업데이트 - 오답노트 페이지가 아닌이상 모든 상단 뒤로가기는 Main페이지로 이동해도 되길래 그렇게 적용함.
// Updated : 2024-05-27 : 로그인 기능 구현 - localStorage를 통해 로그인 성공시 저장.
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

/* 뒤로가기 기능과 UserNavigation 구현
뒤로가기는 window의 location 객체 속성 중 pathname을 사용하여 현재 경로(path)가 메인화면'/'인 경우 외엔 모두 표시. 삼항연산자로 이를 표기
로그인, 회원가입 페이지는 로그인 한 유저에 대해서는 '로그아웃' 창 */
export default function UserNav(){
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const [userId, setUserId] = useState('');
    useEffect(()=>{
        // console.log('id : '+userId);
        setUserId(localStorage.getItem('id')); //localStorage에 있는 userId (세션으로 사용) 존재 여부를 확인하고 가져옴.
    },[userId])
    const handleBackPage = () => {
        if (currentPath === '/longcode'||currentPath === '/blockcode'||currentPath === '/wordquiz'||currentPath === '/custom'||currentPath === '/wronganswer'||currentPath === '/login'||currentPath === '/signup'){
            window.location.href = '/'
        }
        else{
            window.history.back();
        }
    }
    const handleLogout = (e) => {
        e.preventDefault();
        setUserId();
        localStorage.removeItem('id');
        navigate('/login', {replace:true});
    }
    return(
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'1rem', fontWeight:'600', marginTop:'1.3rem', marginRight:'2rem'}}>
            {currentPath === '/' ? <div></div> : <MdArrowBack size={'1.9rem'} style={{marginLeft:'1.5rem', cursor:'pointer'}} onClick={handleBackPage}/> }
            {!userId ? ( // 유저가 로그인중이라면 로그아웃, 마이페이지를 띄우고 아니라면 로그인, 회원가입을 띄운다.
                <div>
                    <Link to={'/login'} className="link-tag" style={{marginRight:'1.5rem'}}>로그인</Link>  
                    <Link to={'/signup'} className="link-tag">회원가입</Link>  
                </div>
            ):(
                <div>
                    <Link onClick={handleLogout} className="link-tag">로그아웃</Link>  
                </div>
            )}
        </div>
    )
}