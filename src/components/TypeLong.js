import { useState } from "react";
import UserNav from "./UserNav";
import TypingLayout from "./layout/typinglayout";

export default function TypeLong(){
    const [timer, setTimer] = useState(90);
    return (
        <div style={{height: '100%'}}>
            <UserNav/>
            <TypingLayout timer={timer}>
                <div style={{display:'flex', flex:6, height:'100%', justifyContent:'center'}}>
                    <div style={{backgroundColor:'red', width:'85%'}}>
                        <div></div>
                    </div>
                </div>
            </TypingLayout>
        </div>
    )
}