import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Mexico's Vacation" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="Mexico is waiting form you" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>we are here to help</h4>
          <p>
            In Mexico's vacation we provide you tools for finding the best
            prices for hotels, flights, car rentals and more. Using our website
            will ensure you get the best price in your next vacation in Mexico.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
