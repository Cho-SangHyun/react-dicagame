import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import './App.css';

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    // myHistory - 나왔던 주사위 숫자들을 배열 형태로 기록
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    // 던지기 버튼을 누를 때 실행될 함수
    const handleRollClick = () => {
        const nextMyNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);

        const nextOtherNum = random(6);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };
    // 처음부터 버튼을 누를 때 실행될 함수
    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };
   
    return (
        <div className="App">
            <div>
                <Button className="App-button" onClick={handleRollClick} color="blue">던지기</Button>
                <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory}/>
                <Board name="상대" color="red" gameHistory={otherHistory}/>
            </div>
        </div>
    );
}

export default App;