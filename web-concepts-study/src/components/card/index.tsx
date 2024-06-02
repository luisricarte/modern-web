import React, { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string,
    description?: string,
}
const Card = ({title,description}:CardProps) => {
    return (
        <> 
            <button>
                <span className={styles.title}>{title}</span>
                <p className={styles.description}>{description}</p>
            </button>
        </>
    )
} 

export default Card