import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import style from "./profile.module.css"
import profileTimer from "../../assets/profileTimer.svg"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import newInfoImages from "../../ComingSoonInfo"
import profileNotifications from "../../assets/profileNotifications.svg"
import { useQuery, gql } from "@apollo/client";
import { LOAD_COMPANY_INFO } from "../../components/graphql/Queries"

interface infoProps {
  company:{
        ceo: string
        cto: string
        name: string
        __typename: string
      }
}

const Profile = () => {

  const {error, loading, data} = useQuery(LOAD_COMPANY_INFO)

  const [info , setInfo] = useState<infoProps>({
    company:{
      ceo: "",
      cto: "",
      name: "",
      __typename: "",
    }
  });

  useEffect(()=>{
    if (data){
      setInfo(data);
    }
  },[data])

  return (
    <div className={style.profileContainer}>
        <Navbar />
      
      <div className={style.profileWrapper}>
        <div className={style.profileLeft}>
            <div className={style.profileLeftContent}>
                <div className={style.profileLeftTop}>
                    <p className={style.profileLogo}>CN</p>
                    <h2>{info.company.name}</h2>
                </div>
                <div className={style.eachTitleAndName}>
                    <p className={style.title}>CEO</p>
                    <p className={style.name}>{info.company.ceo}</p>
                </div>
                <div className={style.eachTitleAndName}>
                    <p className={style.title}>CTO</p>
                    <p className={style.name}>{info.company.cto}</p>
                </div>
            </div>
        </div>

        <div className={style.profileRight}>
          <div className={style.profileRightContent}>
            <div className={style.profileRightTop}>
                <img src={profileTimer} alt="timer" />
                <p>Coming soon</p>
            </div>
            <div className={style.profileRightCenter}>
              {newInfoImages.map((eachItem)=>(
                <div className={style.eachProfileRightCenterItem} key={eachItem.id}>
                  <img src={eachItem.image} alt="Profile party" />
                  <div>
                    <p> <Skeleton width={194} height={14} borderRadius={4} /> </p>
                    <p> <Skeleton width={132} height={14} borderRadius={4} /> </p>
                  </div>
                </div>
                  ))}
            </div>
            <div className={style.profileRightBottom}>
                <img src={profileNotifications} alt="Notifications" />
                <p>Receive notifications about your rider <br /> performance, efficiency reviews and a <br/> lot more</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Profile
