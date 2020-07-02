import React from "react"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import AboutMexico from '../components/Home/AboutMexico'
import Services from "../components/Home/Services"
import Video from "../components/Video"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO
      title="MEXICO is waiting for you with our VACATION DEALS"
    />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="waiting for you"
        info="The best place for your next vacation is Mexico, an unique land for discovering, 
          for pleasure and adventure."
      >
        <Anilink fade to="/flights" className="btn-white">
          fly to Mexico
        </Anilink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <AboutMexico />
    <Video src="https://www.youtube.com/embed/iQycYJdom7U"/>
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
