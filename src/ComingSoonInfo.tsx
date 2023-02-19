import profileParty from "./assets/profileParty.svg"
import profileStars from "./assets/profileStars.svg"
import profileFire from "./assets/profileFire.svg"


type ComingSoonInfoProperties = {
    id: number
    image: string
}[]

 const ComingSoonInfo:ComingSoonInfoProperties = [
    {
        id: 1,
        image: profileParty,
    },
    {
        id: 2,
        image: profileStars,
    },
    {
        id: 3,
        image: profileFire,
    },
  ]

  export default ComingSoonInfo