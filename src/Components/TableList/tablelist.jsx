import React, {useContext} from "react";
import './tablelist.css'
import add from "../../static/icons/add.svg"
import check from "../../static/icons/check.svg"
import {TableElement} from "../TableElement/tableelement";
import {GlobalContext} from "../../App";


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
  const {dispatch, state: {gamesList}} = useContext(GlobalContext)


  const handleSubmit = (data) => {
    data.preventDefault()
    let datapath = data.currentTarget.elements
    let entry = {
      name: datapath.name.value,
      price: datapath.price.value,
      platform: datapath.platform.value,
      timespent: datapath.timespent.value,
      score: datapath.score.value,
      datetime: datapath.datetime.value,
    }
    dispatch({
      type: 'ADD_GAME',
      payload: entry,
    })
  }


  return(
    <div className="TableListWrapper">
      <div><img className="AddButton" onClick={addButtonHandler} alt="add button" aria-label="add button" src={add} /></div>
      <div className="InputFormWrapper">
        <form action='#' onSubmit={(data) => handleSubmit(data)}>
          <input name="name" placeholder="Название" />
          <input name="price" placeholder="₽" size="6"/>
          <select name="platform">
            <option value="Steam">Steam</option>
            <option value="EGS">EGS</option>
            <option value="PSN">PSN</option>
            <option value="XBOX">XBOX</option>
            <option value="E-shop">E-shop</option>
            <option value="Stadia">Stadia</option>
          </select>
          <input name="timespent" placeholder="Время" size="6" />
          <input name="score" type="number" step="1" min="1" max="10" />
          <input name="datetime" type="month" />
          <button type="submit">
            <img className="Submitimg" onClick={addButtonHandler} alt="submit button" aria-label="submit button" src={check} />
          </button>
        </form>
      </div>
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