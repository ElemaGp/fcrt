import profileParty from "./assets/profileParty.svg"
import profileStars from "./assets/profileStars.svg"
import profileFire from "./assets/profileFire.svg"


type ComingSoonInfoProperties = {
    id: number
    image: string
    alt: string
}[]

 const ComingSoonInfo:ComingSoonInfoProperties = [
    {
        id: 1,
        image: profileParty,
        alt: "Profile Party",
    },
    {
        id: 2,
        image: profileStars,
        alt: "Profile Stars",
    },
    {
        id: 3,
        image: profileFire,
        alt: "Profile Fire"
    },
  ]

  export default ComingSoonInfo