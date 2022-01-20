// import문으로 이미지 파일 이름을 정해서 불러올 수 있다
// 이렇게 하는 이유? src속성에 직접 때려박으면 엑박으로 나옴
import diceBlue1 from './assets/dice-blue-1.svg';
// Dice 컴포넌트
function Dice(){
    return <img src={diceBlue1} alt="주사위" />;
}

export default Dice;