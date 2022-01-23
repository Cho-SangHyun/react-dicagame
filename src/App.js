import Board from "./Board";
import Button from "./Button";
import { useState } from "react";

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    // num : 주사위 숫자
    // sum : 총점 - 주사위 던질 때마다 나오는 숫자들을 누적
    // gameHistory - 나왔던 주사위 숫자들을 배열 형태로 기록
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    
    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    // 던지기 버튼을 누를 때 실행될 함수
    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);

        const nextOtherNum = random(6);
        setOtherNum(nextOtherNum);
        setOtherSum(otherSum + nextOtherNum);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    };
    // 처음부터 버튼을 누를 때 실행될 함수
    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);

        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    };
   
    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
                <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
            </div>
        </div>
    );
}

export default App;