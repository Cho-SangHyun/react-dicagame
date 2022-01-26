// import문으로 이미지 파일 이름을 정해서 불러올 수 있다
// 이렇게 하는 이유? src속성에 직접 때려박으면 엑박으로 나옴
// 따라서 이미지 경로들을 처리해야 할 땐 이렇게 import로 처리하고 해주자
// 예를 들어 인라인 스타일을 입힐 때 url(`${variable}`)이런식으로 처리할 것!
import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

const DICE_IMAGES = {
  blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

// Dice 컴포넌트
function Dice(props){
    const src = DICE_IMAGES[props.color][(props.num) - 1];
    const alt = `${props.color} ${props.num}`;
    return <img src={src} alt={alt} />;
}

Dice.defaultProps = {
    color: 'blue',
    num: 1
}

export default Dice;