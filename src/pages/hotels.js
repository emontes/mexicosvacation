import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import InsertaScript from "../components/InsertaScript"
import Banner from "../components/Banner"
import Advantages from "../components/Hotels/Advantages"
import Map from "../components/Hotels/Map"
import OurHotelSearch from "../components/Hotels/OurHotelSearch"
import Video from '../components/Video'
import SEO from "../components/SEO"

// valores posibles de v: 1985 2040
const liga =
  "//www.travelpayouts.com/widgets/6ff66ccd8ff1be19f0a327ce6641a9d4.js?v=2040"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Hotels in Mexico Search and Book"
      description="We compare room prices from different hotel booking services, 
      enabling you to pick the most affordable offers. We search both the largest booking websites and small local systems."
      slug="/hotels"
      pageImage="/mexicos-vacation-hotels.jpg"
    />
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        color="var(--grey)"
        bgcolor="rgb(255, 255, 255, 0.8)"
        title="Book your Hotel"
        info="Book a hotel with a discount and save up to 60%"
      >
        <InsertaScript liga={liga} />
      </Banner>
    </StyledHero>
    <Advantages />
    <Map />
    <OurHotelSearch />
    <Video src="https://www.youtube.com/embed/MtD5UmLo6NY" title="el patito"/>
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "the-royal-haciendas.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
