import React from "react"
import Title from "../Title"
import styled from "styled-components"
import { FaBalanceScale, FaSearch } from 'react-icons/fa'
import { BsChatSquareQuote } from 'react-icons/bs'

const OurHotelSearch = () => {
  return (
    <Wrapper>
      <Title
        title="Our hotel search is better than"
        subtitle="direct seach on single website"
      />
      <p className="subtitle">
        We compare room prices from 70 different hotel booking services,
        enabling you to pick the most affordable offers
      </p>
      <ol className="find-list">
        <li>
          <div className="find-item">
            <div className="find-item__icon"><FaBalanceScale /></div>
            <div className="find-item__text">
              The price for one and the same room can differ depending on the
              website you are using. Price comparison enables finding the best
              offer. Also, sometimes the same room can have a different
              availability status in another system.
            </div>
          </div>
        </li>
        <li>
          <div className="find-item">
            <div className="find-item__icon"><FaSearch /></div>
            <div className="find-item__text">
              We search both the largest booking websites and small local
              systems. Oftentimes, small family hotels are not listed on large
              booking websites.
            </div>
          </div>
        </li>
        <li>
          <div className="find-item">
            <div className="find-item__icon"><BsChatSquareQuote /></div>
            <div className="find-item__text">
              We collect feedback from multiple booking systems, making the
              Hotellook ratings more accurate.
            </div>
          </div>
        </li>
      </ol>
    </Wrapper>
  )
}

export default OurHotelSearch

var Wrapper = styled.section`
  background-color: var(--mainWhite);
  padding: 4rem 0;

  .subtitle {
    max-width: 88%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 53px;
    text-align: center;
    font-size: 1.3rem;
  }

  .find-list {
    max-width: 90%;
    margin: 0 auto;
    @media screen and (min-width: 576px) {
      max-width: 80%;
      list-style: none;
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
      display: none;
      vertical-align: top;
      color: var(--primaryColor);
      font-size: 2rem;
      @media screen and (min-width: 576px ) {
          display: table-cell;
      }
  }

  .find-item__text {
      display: table-cell;
      padding-left: 5px;
      @media screen and (min-width: 576px) {
          padding-left: 26px;
      }
  }
`
