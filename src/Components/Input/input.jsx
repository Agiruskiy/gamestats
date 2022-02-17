import check from "../../static/icons/check.svg";
import React, {useContext} from "react";
import {GlobalContext} from "../../App";

export const Input = () => {

  const {dispatch} = useContext(GlobalContext)

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

return (
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
        <img className="Submitimg" alt="submit button" aria-label="submit button" src={check} />
      </button>
    </form>
  </div>
)}