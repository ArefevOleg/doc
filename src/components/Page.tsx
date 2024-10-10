import React from 'react';
import data from "../data/data.json"
import styles from "../styles/page.module.css"

export const Page = () => {
    const { mainSections } = data;

    return (
            <main id="main-doc" className={styles.main}>
                {mainSections.map((section) => (
                    <section key={section.id} className={styles.mainSection} id={section.id}>
                        <header className={styles.title}>{section.title}</header>
                        <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </section>
                ))}
            </main>
    );
};

