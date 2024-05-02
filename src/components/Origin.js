import { Link } from "react-router-dom";
import UserNav from "./UserNav";

export default function Origin(){
    return(
        <div style={{height:'100%'}}>
            <UserNav/>
            <Link to={'/wordquiz'}>개념퀴즈로 이동</Link>
        </div>
    )
}