import React from "react"
import { BsChat } from "react-icons/bs"
import { GrCurrency, GrLanguage } from "react-icons/gr"
import { AiOutlineCalendar } from "react-icons/ai"
import { RiWalletLine } from "react-icons/ri"
import { GiSteeringWheel } from "react-icons/gi"
import { FaRoad, FaCocktail } from "react-icons/fa"
import { BsBuilding } from "react-icons/bs"

export default [
  {
    icon: <BsChat />,
    title: "Language",
    text: "Spanish",
  },
  {
    icon: <GrCurrency />,
    title: "Currency",
    text: "MXN",
  },

  {
    icon: <GrLanguage />,
    title: "Country code",
    text: "52",
  },
  {
    icon: <AiOutlineCalendar />,
    title: "Average car rental length",
    text: "4 days",
  },
  {
    icon: <RiWalletLine />,
    title: "Economy car rental price",
    text: "23.93 USD / per day",
  },
  {
    icon: <GiSteeringWheel />,
    title: "Traffic direction",
    text: "Right-hand",
  },
  {
    icon: <FaRoad />,
    title: "Speed limit out of town",
    text: "50 - 75 mi/h",
  },
  {
    icon: <BsBuilding />,
    title: "Speed limit within town",
    text: "19 - 43 mi/h",
  },
  {
    icon: <FaCocktail />,
    title: "Acceptable limit of BAC",
    text: "0.04%",
  },
]
