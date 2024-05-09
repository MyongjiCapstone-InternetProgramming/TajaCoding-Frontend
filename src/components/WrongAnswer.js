// 담당자 : 은희
//수업시간 내용 : onmouseover 사용 

import UserNav from "./UserNav";

export default function Origin(){
    return(
        <div style={{height:'100%'}}>
            <UserNav/>
            <div style={{marginTop: '50px', padding:'0.5rem 8rem', fontSize:'80px'}}>오답노트</div>

            <div style={{display:'flex', padding:'5rem', position:'absolute', top: '120px', right: '40px'}}>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}} onMouseOver={(e) => e.target.style.color = 'limegreen'} onMouseOut={(e) => e.target.style.color = 'white'}>COMPUTER_SCIENCE</div>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}} onMouseOver={(e) => e.target.style.color = 'limegreen'} onMouseOut={(e) => e.target.style.color = 'white'}>JAVA</div>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}} onMouseOver={(e) => e.target.style.color = 'limegreen'} onMouseOut={(e) => e.target.style.color = 'white'}>PYTHON</div>
                <div style={{marginRight: '3rem', fontSize: '1.8rem', color: 'white'}} onMouseOver={(e) => e.target.style.color = 'limegreen'} onMouseOut={(e) => e.target.style.color = 'white'}>C</div>
                <div style={{fontSize: '1.8rem', color: 'white'}} onMouseOver={(e) => e.target.style.color = 'limegreen'} onMouseOut={(e) => e.target.style.color = 'white'}>C++</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'3rem', marginBottom:'0rem'}}>
            <div style={{border:'0.5rem dashed white', padding:'15rem 50rem', fontSize:'2rem'}}></div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'3rem', marginBottom:'0rem'}}>
            <div style={{fontSize:'2rem'}}>RETRY</div>
            </div>
        </div>        
    )
}