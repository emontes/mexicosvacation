import React from "react"
import styles from "../../css/about.module.css"
import Img from 'gatsby-image'

const About = ({img}) => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={img} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Why rent a car in México?</h4>
          <p>
          Mexico is a great country for renting a car. With stunning nature, great cultural variety, and access to two oceans, it is a great place to explore at your own pace. Having a rental car with lot you make your own discoveries as you’ll come across its hidden gems.
          </p>
          
        </article>
      </div>
    </section>
  )
}

export default About
