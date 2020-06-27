import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import InsertaScript from '../components/InsertaScript'
import Banner from '../components/Banner'
import Advantages from '../components/Hotels/Advantages'
import Map from '../components/Hotels/Map'

// valores posibles de v: 1985 2040
const liga="//www.travelpayouts.com/widgets/6ff66ccd8ff1be19f0a327ce6641a9d4.js?v=1985" 

export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
            <Banner 
              title="Book your Hotel"
              info="Book a hotel with a discount and save up to 60%"
            >
            <InsertaScript liga={liga}/>                
            
            </Banner>
          </StyledHero>
          <Advantages />
          <Map />
          

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
