import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import InsertaScript from '../components/InsertaScript'
import SEO from '../components/SEO'

export default ({data}) => (
    
        <Layout>
          <SEO 
            title="Car Rentals" 
            description="Find the best options for renting a car in Mexico"
            slug="/cars"
            pageImage = '/mexicos-vacation-cars.jpg'

          />
          <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
            <InsertaScript liga="https://c117.travelpayouts.com/content?promo_id=3873&shmarker=182367&location=mexico%2F&locale=en&bg_color=1BB297&font_color=333333&button_color=CB1A26&button_font_color=ffffff&button_text=Search&powered_by=true" />
          </StyledHero>


        </Layout>
    
)

export const query = graphql`
query {
  defaultBcg: file(relativePath: { eq: "mazatlan-pulmonia.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 2160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
