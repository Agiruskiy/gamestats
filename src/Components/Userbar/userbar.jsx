import avatar from "../../static/icons/avatar-winter-custome-46-svgrepo-com.svg"
import './userbar.css'

export function Userbar() {
  return(
    <div className="Userbar">
      <img alt="avatar" aria-label="avatar" src={avatar} className="Avatar" />
      <h2>User</h2>
      <h3>Всего игр куплено: 9 </h3>
      <h3>Всего денег потрачено: 1000р</h3>
      <h3>Всего времени потрачено: 50 часов</h3>

    </div>
  )
}