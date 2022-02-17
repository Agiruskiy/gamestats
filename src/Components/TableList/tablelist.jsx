import React, {useContext} from "react";
import './tablelist.css'
import add from "../../static/icons/add.svg"
import {TableElement} from "../TableElement/tableelement";
import {GlobalContext} from "../../App";
import {Input} from "../Input/input";


const addButtonHandler = () => {
  let elem = document.querySelector('.InputFormWrapper')
  let img = document.querySelector('.AddButton')
  if (elem.style.display === 'block') {
    elem.style.display = 'none'
    img.style.transform = 'rotate(0.25turn) scale(0.75)'
    setTimeout(() => img.style.transform = 'rotate(0.25turn) scale(1)' , 100)
  } else {
    elem.style.display = 'block'
    img.style.transform = 'rotate(0.25turn) scale(0.75)'
    setTimeout(() => img.style.transform = 'rotate(0.25turn) scale(1)' , 100)
  }
}

export function Tablelist() {

  const {state: {gamesList}} = useContext(GlobalContext)

  return(
    <div className="TableListWrapper">
      <div><img className="AddButton" onClick={addButtonHandler} alt="add button" aria-label="add button" src={add} /></div>
      <Input />
      <div className="TableHeader">
        <span className="HeaderElement">Название</span>
        <span className="HeaderElement">Цена</span>
        <span className="HeaderElement">Платформа</span>
        <span className="HeaderElement">Часов в игре</span>
        <span className="HeaderElement">Оценка</span>
        <span className="HeaderElement">Месяц покупки</span>
        <span className="HeaderElement">Цена за час</span>
      </div>
      {
        gamesList.map(game => <TableElement game={game} key={game.name} />)
      }
    </div>
  )
}