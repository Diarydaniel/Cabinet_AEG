'use client';

import React, { useState, useEffect } from 'react'
import './header.css'

export default function Header() {
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

    return (
        <header
            id='header'
            className={`d-flex align-items-center fixed-top ${scroll > 100 ? 'header-scrolled' : undefined

                }`}
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                    <a href="/">CABINET AEG</a>
                </h1>
                {/* <a href="index.html" className="logo me-auto me-lg-0">
                    <img src="assets/img/logo.png" alt="" className='img-fluid' />
                </a> */}
            </div>
        </header>
    )
}
