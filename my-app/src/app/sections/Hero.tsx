'use client';


import React, { useEffect } from 'react'
import './hero.css';
import GLightbox from 'glightbox';
// import HeroBtn from '../components/HeroBtn';

export default function Hero() {
    useEffect(() => {
        new GLightbox({
            selector: '.glightbox',
        });
    }, []);

    return (
        <section id='hero' className='d-flex align-items-center'>
            <div
                className='container position-relative text-center text-lg-start'
                data-aos='zoom-in'
                data-aos-delay='100'
            >

                <div className='row'>
                    <div className="col-lg-8">
                        <h1>
                            Bienvenue sur notre Site Web <br /><span>Cabinet AEG</span>
                        </h1>
                        <h2> ''AEG est une start-up dédiée dans la partie administrative. Son objectif est non seulement d' alléger les entreprises , afin de leur permettre de se recentrer dans leur activité principale
                            ''</h2>

                        {/* <div className='btns'>
                            <HeroBtn name='our menu' target='menu' />
                            <HeroBtn name='book a table' target='book-a-table' />
                        </div> */}
                    </div>

                    <div
                        className='col-lg-4 d-flex align-items-center justify-content-center position-relative'
                        data-aos='zoom-in'
                        data-aos-delay='200'
                    >

                        <a className='glightbox play-btn'></a>
                    </div>

                </div>

            </div>
        </section>
    )
}
