import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

export default ({data}) => (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="waiting for you"
          info="The best place for your next vacation is Mexico, an unique land for discovering, 
          for pleasure and adventure."
        >
          <Link to="/flights" className="btn-white">
            fly to Mexico
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
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