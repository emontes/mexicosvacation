import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import InsertaScript from "../components/InsertaScript"
import Former from "../components/Flights/Former"
import SEO from "../components/SEO"

const liga =
  "//www.travelpayouts.com/widgets/82bd33db977a4e60014a06ed2acc35d5.js?v=2040"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Search Flights"
      description="We search hundreds of travel sites at once to find the cheapest flights to and from Mexico."
      slug="/flights"
      pageImage = '/mexicos-vacation-flights.jpg'
    />
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
