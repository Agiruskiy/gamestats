import './tableelement.css'

export function TableElement ({game}) {
  return(
    <div className="TableElement">
      <p>{game.name}  {game.price}  {game.platform}  {game.timespent}  {game.score}</p>
    </div>
  )
}