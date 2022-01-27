import dicegame_logo from './assets/logo.png';
import './GameLogo.css';

function GameLogo(){
    return (
        <div className='logo-section'>
            <img id="game-logo" src={dicegame_logo} alt="logo"/>
            <h1 id="game-title">주사위게임</h1>
        </div>
    )
}

export default GameLogo;