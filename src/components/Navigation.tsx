import React from 'react';
import data from "../data/data.json"
import styles from"../styles/nav.module.css"
import { v1 } from 'uuid'

const idItem = v1()
console.log(idItem)

export const Navigation = () => {
    return (
        <ul className={styles.wrapper}>
            <h3>{data.navigationTitle[0].navTitle}</h3>
            {data.navigationJs.map(el => {
                return (
                    <li key={idItem}><a href={el.href}>{el.title}</a></li>
                )
            })}
        </ul>
    );
};

