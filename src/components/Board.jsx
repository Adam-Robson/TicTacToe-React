import { useGameContext } from '../context/GameContext';
import Square from './Square';

export default function Board() {
  const { message, board, gameReset, active } = useGameContext();

  const handleReset = () => {
    gameReset();
  };

  return (
    <>
      <p className="message">{ message }</p>
      <div className="board">
        { board.map(({ val, idx }) => (
          <Square key={ idx } index={ idx } value={ val } />
        )) }
      </div>
      <div className='reset-btn-container'>
        {!active && <button className="reset-btn" onClick={handleReset}>reset</button>}
      </div>
    </>
  );
}
