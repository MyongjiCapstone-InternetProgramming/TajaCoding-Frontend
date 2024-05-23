// 채윤 TypingLayout 제작
const TypingLayout = (props) => {
    const timer = props.timer;
    const accuracy = props.accuracy;
    const mode = props.mode;
    const minute = parseInt(timer/60);
    const second = timer%60;
    return (
        <div style={{display:'flex', height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <div style={{fontSize:'1.5rem' ,display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center', flex:1, height:'75%', borderRight:'0.1rem solid #FFFFFF99'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div style={{borderBottom:'0.1rem solid #FFFFFF99', width:'6.2rem', textAlign:'center', paddingBottom:'0.3rem', marginBottom:'0.3rem'}}>진행시간</div>
                <div>{timer?("0"+minute).slice(-2)+" : "+("0"+second).slice(-2):"00 : 00"}</div>
            </div>
            {mode==='BLOCK'?(
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3rem 0' }}>
                    <div style={{ borderBottom: '0.1rem solid #FFFFFF99', width: '6.2rem', textAlign: 'center', paddingBottom: '0.3rem', marginBottom: '0.3rem' }}>문제 수</div>
                    <div>{'4 문제'}</div>
                </div>
            ):(
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'3rem 0'}}>
                    <div style={{borderBottom:'0.1rem solid #FFFFFF99', width:'6.2rem', textAlign:'center', paddingBottom:'0.3rem', marginBottom:'0.3rem'}}>정확도</div>
                    <div>{accuracy?accuracy.toFixed(2)+"%":"측정 중"}</div>
                </div>
            )}
        </div>
        {props.children}
    </div>
    )
}
export default TypingLayout