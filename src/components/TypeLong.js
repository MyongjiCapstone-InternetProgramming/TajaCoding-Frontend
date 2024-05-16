import UserNav from "./UserNav";

export default function TypeLong(){
    return (
        <div style={{height: '100%'}}>
            <UserNav/>
            <div style={{display:'flex', height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <div style={{fontSize:'1.5rem' ,display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center', flex:1, height:'75%', borderRight:'0.1rem solid #FFFFFF99'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div style={{borderBottom:'0.1rem solid #FFFFFF99', width:'6.2rem', textAlign:'center', paddingBottom:'0.3rem', marginBottom:'0.3rem'}}>진행시간</div>
                        <div>02 : 34</div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'3rem 0'}}>
                        <div style={{borderBottom:'0.1rem solid #FFFFFF99', width:'6.2rem', textAlign:'center', paddingBottom:'0.3rem', marginBottom:'0.3rem'}}>정확도</div>
                        <div>92%</div>
                    </div>
                </div>
                <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center'}}>
                    <div style={{backgroundColor:'red', width:'85%'}}>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}