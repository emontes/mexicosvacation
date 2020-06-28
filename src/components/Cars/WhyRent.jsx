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
          <p>A rental car can provide the freedom and flexibility that public transport cannot when you’re traveling longer distances, especially outside of Mexico City. If you want to see some of the outlying towns and villages “off the beaten track”, then taking a car is the most efficient way to accomplish this, unless you have the patience, time, and temperament to deal with local transport.</p>
          
        </article>
      </div>
    </section>
  )
}

export default About
