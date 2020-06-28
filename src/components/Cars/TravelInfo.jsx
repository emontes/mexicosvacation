import React from "react"
import styled from "styled-components"
import travelInfo from "../../constants/Cars/travel-information"
import Title from "../Title"

const TravelInfo = () => {
  return (
    <InfoWrapper>
      <Title title="Travel" subtitle="Information" />
      <div className="center">
        {travelInfo.map((item, index) => {
          return (
            <article key={index} className="travel-info">
              <div className="icon">{item.icon}</div>
              <div>
                <div className="label">{item.title}</div>
                <div className="data">{item.text}</div>
                <div className="secondary">{item.secondary}</div>
              </div>
            </article>
          )
        })}
      </div>
    </InfoWrapper>
  )
}

export default TravelInfo

const InfoWrapper = styled.section`
  padding: 4rem 0;
  .center {
    
    width: 80vw;
    max-width: 992px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  .travel-info {
    width: 190px;
    
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
    
  }
  .icon {
    color: var(--primaryColor);
    font-size: 1.9rem;
  }
  .label {
    font-size: .8rem;
    line-height: 16px;
    color: var(--grey);
    word-break: break-word;
  }
  .data {
    font-size: 1rem;
  }
  .secondary {
    font-size: .8rem;
  }

`
