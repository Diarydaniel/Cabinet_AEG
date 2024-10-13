'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import './events.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../components/SectionTitle';
import EventsItem from '../components/EventsItem';


export default function Events() {
    const [slides, setSlides] = useState<any | []>([]);

    const getEventsData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`)
            .then(res => res.json())
            .then(data => setSlides(data))
            .catch(err => console.log(err.message));
    }

    useEffect(() => {
        getEventsData();
    }, []);

    return (
        <section id='events' className='events'>
            <div className='container' data-aos='fade-up'>
                <SectionTitle
                    title='Evenements'
                    subtitle='Participer à des evenements chez nous'
                />

                <div data-aos='fade-up' data-aos-delay='100'>
                    <Swiper
                        spaceBetween={0}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        className='events-slider swiper-container'
                    >

                        {slides &&
                            slides.length > 0 &&
                            slides.map(
                                (slide: {
                                    id: number,
                                    images: string,
                                    title: string,
                                    price: number,
                                    content: string,
                                    details: string[],
                                    summary: string,
                                }) => (
                                    <SwiperSlide key={slide.id}>
                                        <EventsItem item={slide} />
                                    </SwiperSlide >
                                )
                            )
                        }

                    </Swiper>
                    <div className='swiper-pagination'></div>

                </div>

            </div>

        </section>
    )
}
