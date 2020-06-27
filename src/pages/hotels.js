import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import InsertaScript from '../components/InsertaScript'
import MapList from '../components/Hotels/MapList'
import Banner from '../components/Banner'

// valores posibles de v: 1985 2040
const liga="//www.travelpayouts.com/widgets/6ff66ccd8ff1be19f0a327ce6641a9d4.js?v=2040" 

export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.fluid}>
            <Banner 
              title="Book your Hotel"
              info="Book a hotel with a discount and save up to 60%"
            >
            <InsertaScript liga={liga}/>                
            
            </Banner>
          </StyledHero>
          <MapList />
          

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
