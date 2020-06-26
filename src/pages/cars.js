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
query 
{
    defaultBcg: contentfulAsset(id: {}, file: {fileName: {eq: "mazatln_48853787663_o.jpg"}}) {
    title
    fluid(quality: 90, maxWidth: 2000) {
      ...GatsbyContentfulFluid_tracedSVG
    }
  }
}
`
