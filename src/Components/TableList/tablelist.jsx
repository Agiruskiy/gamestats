import React from "react";
import './tablelist.css'
import add from "../../static/icons/add.svg"
import {TableElement} from "../TableElement/tableelement";

export function Tablelist() {
  return(
    <div className="TableListWrapper">
      <div><input className="AddButton" alt="add button" aria-label="add button" type="image" src={add} /></div>
      <div className="TableHeader">
        <span className="HeaderElement">Название</span>
        <span className="HeaderElement">Цена</span>
        <span className="HeaderElement">Платформа</span>
        <span className="HeaderElement">Часов в игре</span>
        <span className="HeaderElement">Оценка</span>
        <span className="HeaderElement">Цена за час</span>
        <span className="HeaderElement">Месяц покупки</span>
      </div>
      <TableElement />
    </div>
  )
}