import { useLocation } from "react-router-dom"

export default function TypeResult(){
    const { state } = useLocation();
    const { time, accuracy } = state;

    return (
        <div style={{}}>
            <h1>Type Result</h1>
            <p>Time: {time} seconds</p>
            <p>Accuracy: {accuracy.toFixed(2)}%</p>
        </div>
    );
}