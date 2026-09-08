export default function WindCard({winner, onRestart, hasDraw}) {
    return(
        <>
        <div id='game-over'>
            <h2>Game over</h2>
            {
                hasDraw 
                && <p>The game ended in a draw</p>
                || <p>Winning player is {winner}</p>
            }
            <button onClick={onRestart}>Try Again?</button>
        </div>
        </>
        
    )
}