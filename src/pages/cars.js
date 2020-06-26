import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import InsertaScript from '../components/InsertaScript'

export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.fluid}>
            <InsertaScript liga="https://c117.travelpayouts.com/content?promo_id=3873&shmarker=182367&location=mexico%2F&locale=en&bg_color=1BB297&font_color=333333&button_color=CB1A26&button_font_color=ffffff&button_text=Search&powered_by=true" />
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
