// 채윤 (마지막 수정 : 2024-04-28)
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize } from "react-icons/vsc";
import '../css/StatusBar.css'

export default function StatusBar() {
    /* 상태창 전체화면 기능
    Document 객체를 사용하여 최대화(Maximize) 버튼을 누르면 실제로 전체화면으로 전환된다.
    document.fullscreenElement를 통해 현재 fullscreen인지 여부를 알 수 있고, 이를 통해 전체화면 상태를 전환한다. */
    const handleFullScreen = () => {
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else{
            document.exitFullscreen();
        }
    }
    return (
        <div className="status-bar">
            <div className="status-bar-title">
                <img style={{marginRight: '0.6rem'}} src="./tajacodingicon.svg" alt="svg" width={20} height={20}/>
                <span>TACO - 타자로 코딩하자</span>
            </div>
            <div className="status-bar-button">
                <button className="minimize">
                    <VscChromeMinimize />
                </button>
                <button onClick={handleFullScreen} className="maximize">
                    <VscChromeMaximize />
                </button>
                <button className="close">
                    <VscChromeClose />
                </button>
            </div>
        </div>
    )
}

