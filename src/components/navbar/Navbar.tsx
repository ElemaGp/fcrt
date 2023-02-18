import style from "./navbar.module.css"
import MoneyAppIcon from "../../assets/MoneyAppIcon.svg"

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <img src={MoneyAppIcon} alt="Money App Icon" className={style.appIcon} />
    </div>
  )
}

export default Navbar