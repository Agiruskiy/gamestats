import avatar from "../../static/icons/avatar-winter-custome-46-svgrepo-com.svg"
import './userbar.css'
import {useContext} from "react";
import {GlobalContext} from "../../App";

export function Userbar() {
  const {state: {gamesList}} = useContext(GlobalContext)

  let pricesum = () => {
    let sum = 0
    gamesList.forEach((el) => sum+= parseInt(el.price))
    return sum
  }

  let timesum = () => {
    let sum = 0
    gamesList.forEach((el) => sum+= parseInt(el.timespent))
    return sum
  }


  return(
    <div className="Userbar">
      <img alt="avatar" aria-label="avatar" src={avatar} className="Avatar" />
      <h2>User</h2>
      <h3>Всего игр куплено: {gamesList.length} </h3>
      <h3>Всего денег потрачено: {pricesum()}р</h3>
      <h3>Всего времени потрачено: {timesum()} часов</h3>

    </div>
  )
}