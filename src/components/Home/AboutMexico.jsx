import React from "react"
import styled from "styled-components"
import Title from "../Title"

const AboutMexico = () => {
  return (
    <AboutWrapper>
      <Title title="About" subtitle="Mexico" />
      <ul className="find-list">
        <li>
          <div className="find-item">
            <div className="find-item__icon"></div>
            <div className="find-item__text">              
              <p>Mexico has many lodging options from all-inclusive to family
              hotels. Finding accommodation won't be a problem with Mexico's
              Vacation.</p>
              <p>
              Enjoy a party time in los Cabos, Be amazed by the turquoise blue waters of Cancún,
              Take a snorkel tour in Cozumel, discover an ancient Culture in Yucatan and Chiapas...
              </p>
              <p>
                  In short, Mexico has it all for your best vacations.
              </p>
              
            </div>
          </div>
        </li>
      </ul>
    </AboutWrapper>
  )
}

export default AboutMexico

const AboutWrapper = styled.section`
  bacground: var(--mainWhite);
  padding: 4rem 0;

  .find-list {
    max-width: 90%;
    margin: 0 auto;
    list-style: none;
    @media screen and (min-width: 576px) {
      max-width: 80%;
    }
    li {
      margin-bottom: 18px;
      @media screen and (min-width: 576px) {
        margin-bottom: 36px;
      }
    }
  }

  .find-item {
    display: table;
  }

  .find-item__icon {
    vertical-align: top;
    color: var(--primaryColor);
    font-size: 1rem;
    display: table-cell;
    @media screen and (min-width: 576px) {
      font-size: 2rem;
    }
  }

  .find-item__text {
    padding-left: 5px;
    @media screen and (min-width: 576px) {
      padding-left: 26px;
    }
  }
`
