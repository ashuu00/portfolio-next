import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/Demo.module.scss'
export default function demo() {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.wrap}>
                {
                    [...Array(200)].map((val,idx)=>(<div key={idx} className={styles.tri}></div>))
                }
            </div>
        </div>
    )
}
