import React from "react"
import InsertaScript from "../InsertaScript"
import styled from "styled-components"
import Title from "../Title"

const destinos = ["CUN", "MEX", "SJD", "BJX", "GDL", "MID"]
const host = "flights.mexicosvacation.com"

const Former = () => {
  return (
    <FormerWrapper>
      <Title title="Former" subtitle="Mexico Destinations" />
      <div className="center">
        {destinos.map((destino, index) => {
          return (
            <InsertaScript
              key={index}
              liga={`https://www.travelpayouts.com/weedle/widget.js?v=1&marker=182367&host=${host}&locale=en&currency=usd&powered_by=false&destination=${destino}`}
            />
          )
        })}
      </div>
    </FormerWrapper>
  )
}

export default Former

const FormerWrapper = styled.section`
  padding: 4rem 0;
  .center {
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}
`
