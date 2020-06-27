import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import InsertaScript from "../components/InsertaScript"
import Former from '../components/Flights/Former'


const liga = "//www.travelpayouts.com/widgets/82bd33db977a4e60014a06ed2acc35d5.js?v=2040"

export default ({ data }) => (
  <Layout>
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
      <InsertaScript liga={liga} />
    </StyledHero>
    <Former />
    
  </Layout>
)

export const query = graphql`
query {
  defaultBcg: file(relativePath: { eq: "flight-mazatlan.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 2160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`