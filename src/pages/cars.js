import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.fluid}>
            Cars
          </StyledHero>


        </Layout>
    
)

export const qury = graphql`
query {
  defaultBcg: contentfulAsset(id: {eq: "b2e190cc-818d-5746-8b96-e7c1d4399376"}) {
    title
    fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyContentfulFluid_tracedSVG
    }
  }
}
`
