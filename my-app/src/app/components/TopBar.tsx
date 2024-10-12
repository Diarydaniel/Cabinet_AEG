'use client'

import React, { useEffect, useState } from 'react'
import './topBar.css';

export default function TopBar() {
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
        <div
            id='topbar'
            className={`d-flex align-items-center fixed-top ${scroll > 100 ? 'topba-scrolled' : undefined

                }`}
        >

            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-phone d-flex align-items-center">
                        <span> + 261 38 61 133 36</span>
                    </i>
                    <i className="bi bi-clock d-flex align-items-center ms-4">
                        <span>Mon-Sat: 11AM - 23PM</span>
                    </i>
                </div>
                <div className="languages d-none d-md flex align-items-center">
                    <ul>
                        <li>FR</li>
                        <li>
                            <a href="#">EN</a>
                        </li>
                    </ul>
                </div>

            </div>


        </div >
    )
}
