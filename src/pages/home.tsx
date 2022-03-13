import React from 'react'
import Header from '../teleporthq/components/header'
import styles from '../teleporthq/style.module.css'

const Home = () => {
    return <div>
    <h1 className={styles['red']}>Home</h1>
        <Header heading={'Salut'}/>
    </div>
}

export default Home