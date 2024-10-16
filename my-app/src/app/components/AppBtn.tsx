import React from 'react'
import './appBtn.css';

export default function AppBtn({ name }: { name: string }) {

    // Créaction du function HandleScrollTo
    const handleScrollTo = (section: string) => {

    };

    return (
        <a
            href=""
            className="app-btn scrollto d-none d-lg-flex"
            onClick={() => handleScrollTo('book-a-table')}
        >
            {name}
        </a>
    )
}
