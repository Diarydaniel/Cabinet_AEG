'use client';

import React, { useState, useEffect } from 'react'
import './header.css'
import AppBtn from './AppBtn';
import Nav from './Nav';

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
                    <a href="/" className="d-flex align-items-center">
                        <img src="/assets/logo.png" alt="Logo" className="img-fluid logo-img" />
                        <span className="ms-2">Logo AEG</span>
                    </a>
                </h1>


                <Nav />
                <AppBtn name='Cabinet AEG' />
            </div>
        </header>
    )
}
