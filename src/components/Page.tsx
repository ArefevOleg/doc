import React from 'react';
import {description} from "../data/data"
import styles from "../styles/page.module.css"

export const Page = () => {
    return (
        <div className={styles.pageWrapper}>
            {description.map(el => {
                return (
                    <div>{el}</div>
                )
            })}
        </div>
    )
};
