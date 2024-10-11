import React, { useState } from 'react';
import styles from '../styles/nav.module.css';
import data from "../data/data.json"
import { v1 } from 'uuid'

const idItem = v1()

interface Concept {
    concept: string;
    description: string;
}

interface NavigationProps {
    navigationTitle: { id: string; navTitle: string }[];
    books: { title: string; author: string; description: string }[];
    htmlConcepts: Concept[];
    cssConcepts: Concept[];
    reactConcepts: Concept[];
}

export const Navigation: React.FC<NavigationProps> = ({ navigationTitle, books, htmlConcepts, cssConcepts, reactConcepts }) => {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState<string | null>(null);

    const toggleSubmenu = (id: string) => {
        setIsSubmenuVisible(isSubmenuVisible === id ? null : id);
    };

    const renderSubmenu = (id: string) => {
        switch (id) {
            case 'Javascript':
                return data.mainSections.map((section) => (
                    <div  key={section.id}>
                        <h3>{section.title}</h3>
                    </div>
                ));
            case 'React':
                return reactConcepts.map((concept) => (
                    <div key={concept.concept}>
                        <h3>{concept.concept}</h3>
                    </div>
                ));
            case 'HTML':
                return htmlConcepts.map((concept) => (
                    <div key={concept.concept}>
                        <h3>{concept.concept}</h3>
                    </div>
                ));
            case 'CSS':
                return cssConcepts.map((concept) => (
                    <div key={concept.concept}>
                        <h3>{concept.concept}</h3>
                    </div>
                ));
            case 'Books':
                return books.map((book) => (
                    <div key={book.title}>
                        <h3>{book.title}</h3>
                        <p><strong>Author:</strong> {book.author}</p>
                    </div>
                ));
            case 'Video':
                // Добавьте здесь код для отображения видео
                return <p>Video content will be here</p>;
            case 'Photo':
                // Добавьте здесь код для отображения фотографий
                return <p>Photo content will be here</p>;
            default:
                return null;
        }
    };

    return (
        <ul className={styles.menu}>
            {navigationTitle.map((title) => (
                <li key={title.id}>
                    <a href="#" onClick={() => toggleSubmenu(title.id)}>
                        {title.navTitle}
                    </a>
                    {isSubmenuVisible === title.id && renderSubmenu(title.id)}
                </li>
            ))}
        </ul>
    );
};
