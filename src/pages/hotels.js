import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Banner from '../components/Banner'
import InsertaScript from '../components/InsertaScript'




export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.fluid}>
            <InsertaScript liga="//www.travelpayouts.com/widgets/6ff66ccd8ff1be19f0a327ce6641a9d4.js?v=1985"/>
          </StyledHero>
          
          

        </Layout>
    
)

export const query = graphql`
query 
{
  defaultBcg: contentfulAsset(id: {eq: "8a7b2aa5-76fe-537d-9fd4-ea517747cdfe"}) {
    title
    fluid(quality: 90, maxWidth: 2000) {
      ...GatsbyContentfulFluid_tracedSVG
    }
  }
}
`
