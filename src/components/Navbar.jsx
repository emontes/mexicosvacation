import React, { useState } from "react"
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import styles from "../css/navbar.module.css"
import { FaAlignRight, FaGreaterThanEqual } from "react-icons/fa"
import links from "../constants/links"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  const activStyle = {color: 'green'}
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Anilink fade to="/">
          <img style={{ width: "302px"}} src={logo} alt="welcome to Mexico's Vacation" />
          </Anilink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (<li key={index}>
              <Anilink fade to={item.path} activeClassName={styles.activa}>{item.text}</Anilink>
            </li>)
          })}
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar
