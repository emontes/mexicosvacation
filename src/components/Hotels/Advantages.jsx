import React from "react"
import Title from "../Title"
import advantages from '../../constants/advantages'
import styled from 'styled-components'

const Advantages = () => {
  return (
    <AdvantagesWrapper>
      <Title title="Advantages of booking" subtitle="with Mexico's Vacation" />
      <div className="center">
        {advantages.map((item, index) => {
          return (
            <article key={index} className="advantage">
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </AdvantagesWrapper>
  )
}

export default Advantages

const AdvantagesWrapper = styled.section`
background: var(--mainWhite);
padding: 4rem 0;
.center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 2rem;
}
.advantage {
  margin: 2rem 0;
  text-align: center;
}
.advantage span {
  color: var(--primaryColor);
  padding: 0.5rem;
  display: inline-block;
  font-size: 4rem;
  margin-bottom: 1.5rem;
}
.advantage h4 {
  text-transform: uppercase;
}
` 