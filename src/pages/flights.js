import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.fluid}>
            Flights
          </StyledHero>


        </Layout>
    
)

export const qury = graphql`
query {
  defaultBcg: contentfulAsset(id: {eq: "3c8f8cc5-350c-51bd-b7d7-d3c887149f49"}) {
    title
    fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyContentfulFluid_tracedSVG
    }
  }
}
`
