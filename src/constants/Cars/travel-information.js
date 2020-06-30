import React from "react"
import { BsChat } from "react-icons/bs"
import { AiOutlineCalendar } from "react-icons/ai"
import { RiWalletLine } from "react-icons/ri"
import { GiSteeringWheel } from "react-icons/gi"
import { FaRoad, FaCocktail, FaRegMoneyBillAlt } from "react-icons/fa"
import { BsBuilding } from "react-icons/bs"
import { TiWorldOutline } from 'react-icons/ti'

export default [
  {
    icon: <BsChat />,
    title: "Language",
    text: "Spanish",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Currency",
    text: "MXN",
  },

  {
    icon: <TiWorldOutline />,
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
    text: "80 - 120 km/h",
    secondary: "50 - 75 mi/h",
  },
  {
    icon: <BsBuilding />,
    title: "Speed limit within town",
    text: "30-70 km/h",
    secondary: "19 - 43 mi/h",
  },
  {
    icon: <FaCocktail />,
    title: "Acceptable limit of BAC",
    text: "0.04%",
  },
]
