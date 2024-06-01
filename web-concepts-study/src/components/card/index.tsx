import React from 'react'
import styles from './styles.module.css'

interface CardProps {
    title: string,
    description?: string,
}
const Card = ({title,description}:CardProps) => {
    return (
        <>
            <span className={styles.title}>{title}</span>
            <p className={styles.description}>{description}</p>
        </>
    )
} 

export default Card