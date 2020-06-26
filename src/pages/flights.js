import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import InsertaScript from '../components/InsertaScript'

export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.fluid}>
            <InsertaScript liga="//www.travelpayouts.com/widgets/57099704ba20086f22f66db757d2af98.js?v=2039" />
          </StyledHero>
          <InsertaScript liga="https://www.travelpayouts.com/weedle/widget.js?v=1&marker=182367&host=search.jetradar.com&locale=en&currency=usd&powered_by=true&destination=MEX" />

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
