import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import InsertaScript from "../components/InsertaScript"


const liga = "//www.travelpayouts.com/widgets/82bd33db977a4e60014a06ed2acc35d5.js?v=2040"
const host = "flights.mexicosvacation.com"
const destinos = ["CUN", "MEX", "SJD", "BJX", "GDL", "MID"]


export default ({ data }) => (
  <Layout>
    <StyledHero img={data.defaultBcg.fluid}>
      <InsertaScript liga={liga} />
    </StyledHero>

    {destinos.map((destino, index) => {
      return (
        <InsertaScript
          key={index}
          liga={`https://www.travelpayouts.com/weedle/widget.js?v=1&marker=182367&host=${host}&locale=en&currency=usd&powered_by=false&destination=${destino}`}
        />
      )
    })}
  </Layout>
)

export const qury = graphql`
  query {
    defaultBcg: contentfulAsset(
      id: { eq: "3c8f8cc5-350c-51bd-b7d7-d3c887149f49" }
    ) {
      title
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
`
