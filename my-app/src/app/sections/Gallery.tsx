'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import './gallery.css'


import SectionTitle from '../components/SectionTitle';
import GalleryItem from '../components/GalleryItem';
import Preloader from '../components/Preloader';

export default function Gallery() {
    const [images, setImages] = useState<any | []>([]);

    const getImagesData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(err => console.log(err.message));
    }
    useEffect(() => {
        getImagesData();
    }, []);
    return (
        <section id='gallery' className='gallery'>
            <div className='container' data-aos="fade-up">
                <SectionTitle
                    title='Photos'
                    subtitle='Quelque photo dans notre Cabinet AEG'
                />
            </div>

            <div className='container-fuild' data-aos='fade-up' data-aos-delay='100'>
                <div className='row g-0'>
                    {!images ? (
                        <Preloader />

                    ) : images.length > 0 ? (
                        images.map((image: { id: number; image: string }) => (
                            <GalleryItem key={image.id} item={image} />
                        ))
                    ) : (
                        <Preloader />
                    )}

                </div>
            </div>
        </section>

    )
}
