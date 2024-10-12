'use client';

import React, { useState, useEffect } from 'react';
import './backToTopBtn.css';



export default function BackToTopBtn() {
    //Déclaration des variables à utiliser
    const [scroll, setScroll] = useState(0);

    //Récupération du scroll en temps réel
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    const backToTopBar = () => {
        window.scrollTo(0, 0);
    }


    return (
        <a
            onClick={backToTopBar}
            className={`back-to-top d-flex align-items-center justify-content-center 
                ${scroll > 100 ? 'active' : undefined} `}

        >
            <i className='bi bi-arrow-up-short'></i>
        </a>
    )
}
