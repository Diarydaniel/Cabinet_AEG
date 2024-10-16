'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../components/SectionTitle';
import TestimonialsItem from '../components/TestimonialsItem';


export default function Testimonials() {
    const [slides, setSlides] = useState<any | []>([]);
    const getTestimonialsData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`)
            .then(res => res.json())
            .then(data => setSlides(data))
            .catch(err => console.log(err.message));
    }

    useEffect(() => {
        getTestimonialsData();
    }, []);
    return (
        <section id='testimonials' className='testimonials section-bg'>
            <div className='container' data-aos='fade-up'>
                <SectionTitle
                    title='Temoigniage'
                    subtitle='Quelque temoigniage des clients'
                />

                <div data-aos='fade-up' data-aos-delay='100'>
                    <Swiper
                        slidesPerView={'auto'}
                        speed={600}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.testimonials-swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className='testimonials-slider swiper-container'
                    >

                        {slides &&
                            slides.length > 0 &&
                            slides.map(
                                (slide: {
                                    id: number;
                                    content: string;
                                    avatar: string;
                                    client: string;
                                    position: string;
                                }) => (
                                    <SwiperSlide key={slide.id}>
                                        <TestimonialsItem item={slide} />
                                    </SwiperSlide >
                                )
                            )
                        }

                    </Swiper>
                    <div className='testimonials-swiper-pagination'></div>

                </div>

            </div>

        </section >
    )
}
