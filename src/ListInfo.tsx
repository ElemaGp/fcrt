import NoteDollarImageLogin from "./assets/NoteDollarImageLogin.svg"
import NoteLinesImage from "./assets/NoteLinesImage.svg"


type listInfoProperties = {
    image: string
    heading: string
    desc1: string
    desc2: string
}[]

 const listInfo:listInfoProperties = [
    {
        image: NoteDollarImageLogin,
        heading: "Monitor your Earnings",
        desc1: "Easily see how much your businesses are earning on",
        desc2: "each transaction and watch your earnings rise.",
    },
    {
        image: NoteLinesImage,
        heading: "Manage your Businesses",
        desc1: "Easily see how much your businesses are earning on",
        desc2: "each transaction and watch your earnings rise.",
    },
  ]

  export default listInfo