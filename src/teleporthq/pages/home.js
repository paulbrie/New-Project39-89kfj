import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project39</title>
        <meta property="og:title" content="New Project39" />
      </Helmet>
      <Header></Header>
    </div>
  )
}

export default Home
