import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="waiting for you"
          info="The best place for your next vacation is Mexico, an unique land for discovering, 
          for pleasure and adventure."
        >
          <Link to="/flights" className="btn-white">
            fly to Mexico
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
