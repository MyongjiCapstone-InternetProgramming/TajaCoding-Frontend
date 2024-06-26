// 채윤 (생성 : 2024-05-02)
// 최종 수정 : 2024-05-27 => node.js 회원가입 연결 및 로그인페이지로 연결
import { useState } from "react";
import UserNav from "./UserNav";
import useSignup from "../hook/useSignup";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup(){
    const navigate = useNavigate();
    const {signup} = useSignup();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [nickname, setNickname] = useState("");
    const handleSignup = (e) => {
        e.preventDefault();
        if (id==="" || pw==="" || nickname==="") return window.alert('빈칸을 입력할 수 없습니다.');
        signup({
            id : id,
            password : pw,
            nickname : nickname
        }).then(result=>{
            if (result.status === 200){
                // console.log(result.data);
                window.alert(result.data.message);
                navigate('/login');
            } else {
                // console.log(result.data);
                window.alert(result.data.message);
            }
        })
    }
    return(
        <div style={{height:'100%'}}>
            <UserNav/>
            <div style={{display:'flex', height:'80%', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{fontSize:'3rem', margin: '0 0 2rem 0' }}>SIGN UP</div>
                <div style={{border:"0.5rem dashed white"}}>
                    <form onSubmit={handleSignup} style={{padding:'3rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        {/* ID와 PW를 입력받는 FORM */}
                        <div style={{marginBottom:'1.3rem'}}>
                            <div style={{marginBottom:'0.5rem'}}>아이디</div>
                            <input value={id} onChange={(e)=>{setId(e.target.value)}} style={{backgroundColor:"transparent", border:'0.2rem solid white', padding:'0.6rem 1rem', color:'white', fontSize:'1.2rem'}}/>
                        </div>
                        <div style={{marginBottom:'1.3rem'}}>
                            <div style={{marginBottom:'0.5rem'}}>핀번호 (4글자)</div>
                            {/* input태그의 pattern을 사용하여 0~9의 숫자로 4글자 형식을 맞춰야만 submit되도록 함 */}
                            <input pattern="[0-9]{4}" maxLength={4} value={pw} onChange={(e)=>{setPw(e.target.value)}} type="password" style={{backgroundColor:"transparent", border:'0.2rem solid white', padding:'0.6rem 1rem', color:'white', fontSize:'1.2rem'}}/>
                        </div>
                        <div>
                            <div style={{marginBottom:'0.5rem'}}>닉네임 (최대 8글자)</div>
                            <input maxLength={8} value={nickname} onChange={(e)=>{setNickname(e.target.value)}} style={{backgroundColor:"transparent", border:'0.2rem solid white', padding:'0.6rem 1rem', color:'white', fontSize:'1.2rem'}}/>
                        </div>
                        <button type="submit" style={{borderStyle:'none', padding:'0.8rem 1.5rem', marginTop:'3rem', fontSize:'0.9rem'}}>회원가입</button>
                    </form>
                </div>
            </div>
        </div>
    )
}