import style from "./login.module.css"
import MoneyAppIcon from "../../assets/MoneyAppIcon.svg"
import NotePeople from "../../assets/NotePeople.svg"
import tickCircle from "../../assets/tickCircle.svg"
import info from "../../ListInfo"
import usePasswordToggle from "../../usePasswordToggle"

const Login = () => {

  //password eye-toggle
  const [passwordInputType, EyeIcon] = usePasswordToggle();

  return (
    <div className={style.loginContainer}>

      <div className={style.loginLeft}>
        <div className={style.loginLeftContent}>
            <img src={MoneyAppIcon} alt="Money App Icon" className={style.moneyAppIcon} />
            <h1 className={style.loginLeftHeading}>Hi there, see what's new</h1>
            <p className={style.loginLeftDesc}>Here's how Foodcourt helps you manage your daily operations</p>
            <p className={`${style.loginLeftDesc} ${style.lowermargin}`}>and ensure your riders are efficient</p>
            
            {info.map((infoData)=>(
                <div className={style.eachloginLeftList}>
                  <img src={infoData.image} alt={infoData.heading} />
                  <div>
                    <p className={style.loginLeftListHeading}>{infoData.heading}</p>
                    <p className={style.loginLeftListDesc}>{infoData.desc1}</p>
                    <p className={style.loginLeftListDesc}>{infoData.desc2}</p>
                  </div>
                </div>
              ))}

            <div className={`${style.eachloginLeftList} ${style.extraStyling}` }>
                  <img src={NotePeople} alt="delegate to staff" />
                  <div>
                    <p className={style.loginLeftListHeading}>Delegate to Staff</p>
                    <p className={style.loginLeftListDesc}>Easily see how much your businesses are earning on</p>
                    <p className={style.loginLeftListDesc}>each transaction and watch your earnings rise.</p>
                  </div>
                  <img src={tickCircle} alt="checkmark" className={style.checkmark} />
            </div>
        </div>
      </div>

      <div className={style.loginRight}>
            <div className={style.loginRightContent}>
              <h2>Login to your dashboard</h2>
              <p className={style.loginRightDesc}>Provide details to login to your account</p>

              <form>
                <div className={style.eachFormArea}>
                  <label htmlFor="email" className={style.label}>Email</label>
                    <input id="email" type="email" />
                </div>
                <div className={style.eachFormArea}>
                  <label htmlFor="password" className={style.label}>Password</label>
                  <div className={style.passwordArea}>
                    <input id="password" type={passwordInputType} />
                    <div className={style.passwordEyeIcon}>{EyeIcon}</div>
                  </div>
                </div>
                <button>Login</button>
              </form>
            </div>
      </div>

    </div>
  )
}

export default Login