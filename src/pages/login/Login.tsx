import style from "./login.module.css"
import MoneyAppIcon from "../../assets/MoneyAppIcon.svg"
import NotePeople from "../../assets/NotePeople.svg"
import tickCircle from "../../assets/tickCircle.svg"
import info from "../../ListInfo"
import usePasswordToggle from "../../usePasswordToggle"
import { useState, useContext } from "react"
import { AuthContext } from "../../components/authContext/AuthContext"
import { login } from "../../components/authContext/apiCalls"

interface theUserProp {
  email: string;
  password: string;
}

const Login = () => {

  const {dispatch} = useContext(AuthContext);

  const [theUser, setTheUser] = useState<theUserProp>({
    email: "",
    password:"",
  });

  //password eye-toggle
  const [passwordInputType, EyeIcon] = usePasswordToggle();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;
    setTheUser({...theUser, [e.target.name]: value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    login(theUser, dispatch);
  }

  return (
    <div className={style.loginContainer}>

      <div className={style.loginLeft}>
        <div className={style.loginLeftContent}>
            <img src={MoneyAppIcon} alt="Money App Icon" className={style.moneyAppIcon} />
            <h1 className={style.loginLeftHeading}>Hi there, see what's new</h1>
            <p className={`${style.loginLeftDesc} ${style.lowermargin}`}>Here's how Foodcourt helps you manage your daily operations <br /> and ensure your riders are efficient</p>
            
            {info.map((infoData)=>(
                <div className={style.eachloginLeftList} key={infoData.heading}>
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
                    <p className={style.loginLeftListDesc}>Easily see how much your businesses are earning on <br /> each transaction and watch your earnings rise.</p>
                  </div>
                  <img src={tickCircle} alt="checkmark" className={style.checkmark} />
            </div>
        </div>
      </div>

      <div className={style.loginRight}>
            <div className={style.loginRightContent}>
              <h2>Login to your dashboard</h2>
              <p className={style.loginRightDesc}>Provide details to login to your account</p>

              <form onSubmit={handleSubmit}>
                <div className={style.eachFormArea}>
                  <label htmlFor="email" className={style.label}>Email</label>
                    <input id="email" name="email" type="email" value={theUser.email} onChange={handleChange}/>
                </div>
                <div className={style.eachFormArea}>
                  <label htmlFor="password" className={style.label}>Password</label>
                  <div className={style.passwordArea}>
                    <input id="password" name="password" type={passwordInputType} value={theUser.password} onChange={handleChange}/>
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