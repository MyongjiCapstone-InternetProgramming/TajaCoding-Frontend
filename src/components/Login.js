// 채윤 (마지막 수정 : 2024-05-02)
import { useState } from "react";
import UserNav from "./UserNav";

export default function Login(){
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (id==="" || pw==="") return window.alert('빈칸을 입력할 수 없습니다.');
    }
    return(
        <div style={{height:'100%'}}>
            <UserNav/>
            <div style={{display:'flex', height:'80%', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{fontSize:'3rem', margin: '0 0 2rem 0' }}>LOGIN</div>
                <div style={{border:"0.5rem dashed white"}}>
                    <form onSubmit={handleLogin} style={{padding:'3rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        {/* ID와 PW를 입력받는 FORM */}
                        <div style={{marginBottom:'1.3rem'}}>
                            <div style={{marginBottom:'0.5rem'}}>아이디</div>
                            <input value={id} onChange={(e)=>{setId(e.target.value)}} style={{backgroundColor:"transparent", border:'0.2rem solid white', padding:'0.6rem 1rem', color:'white', fontSize:'1.2rem'}}/>
                        </div>
                        <div>
                            <div style={{marginBottom:'0.5rem'}}>핀번호 (4글자)</div>
                            {/* input태그의 pattern을 사용하여 0~9의 숫자로 4글자 형식을 맞춰야만 submit되도록 함 */}
                            <input pattern="[0-9]{4}" maxLength={4} value={pw} onChange={(e)=>{setPw(e.target.value)}} type="password" style={{backgroundColor:"transparent", border:'0.2rem solid white', padding:'0.6rem 1rem', color:'white', fontSize:'1.2rem'}}/>
                        </div>
                        <button type="submit" style={{borderStyle:'none', padding:'0.8rem 1.5rem', marginTop:'3rem', fontSize:'0.9rem'}}>로그인</button>
                    </form>
                </div>
            </div>
        </div>
    )
}