import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

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
    // 던지기 버튼을 누를 때 실행될 함수
    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
    };
    // 처음부터 버튼을 누를 때 실행될 함수
    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>나</h2>
                <Dice color="blue" num={num}/>
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}

export default App;