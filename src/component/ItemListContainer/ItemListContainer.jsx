import React from 'react'
import styles from '../ItemListContainer/ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className={styles.Titulo}>
          <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
