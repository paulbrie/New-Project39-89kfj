import React from 'react'

import PropTypes from 'prop-types'

import styles from './header.module.css'

const Header = (props) => {
  return (
    <div className={styles['container']}>
      <h1>{props.heading}</h1>
    </div>
  )
}

Header.defaultProps = {
  heading: 'Salut! :) -- ',
}

Header.propTypes = {
  heading: PropTypes.string,
}

export default Header
