import React, { useState } from 'react';
import styles from '../styles/nav.module.css';
import data from "../data/data.json"
import { v1 } from 'uuid'

const idItem = v1()


export const Navigation = () => {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(null);

    const toggleSubmenu = (index: any) => {
        setIsSubmenuVisible(isSubmenuVisible === index ? null : index);
    };

    const renderSubmenu = (index: any) => {
        return (
            <ul className={styles.submenu}>
                {data.navigationJs.map((el, subIndex) => (
                    <li key={subIndex}>
                        <a href={el.href}>{el.title}</a>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <ul className={styles.menu}>
            {data.navigationTitle.map((title, index) => (
                <li key={index}>
                    <a href="#" onClick={() => toggleSubmenu(index)}>
                        {title.navTitle}
                    </a>
                    {isSubmenuVisible === index && renderSubmenu(index)}
                </li>
            ))}
        </ul>
    );
};

