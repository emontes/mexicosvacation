import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

export default function error() {
    return (
        <Layout>
            <SEO title="404 Error" description="Page not found in this site" />
            <header className={styles.error}>
                <Banner title="caramba! it's a dead end">
                    <Anilink fade to='/' className="btn-white">back to home page</Anilink>
                </Banner>
            </header>
        </Layout>
    )
}

