import React from 'react'
import Layout from '../components/Layout'
import {Helmet} from 'react-helmet'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Banner from '../components/Banner'

export default ({data}) => (
    
        <Layout>
          <StyledHero img={data.defaultBcg.fluid}>
            <Banner title="Find Hotels"/>
          </StyledHero>
          
          <Helmet>
          <script src="//tp.media/content?promo_id=4132&shmarker=182367&campaign_id=121&locale=en&powered_by=true&border_radius=0&plain=false&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff" charset="utf-8"></script>
          </Helmet>
            
            

        </Layout>
    
)

export const qury = graphql`
query {
  defaultBcg: contentfulAsset(id: {eq: "8a7b2aa5-76fe-537d-9fd4-ea517747cdfe"}) {
    title
    fluid(quality: 90, maxWidth: 4160) {
      ...GatsbyContentfulFluid_tracedSVG
    }
  }
}
`
