'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import { filters } from '../data/data';
import './menu.css';

import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';
import Preloader from '../components/Preloader';

export default function Menu() {

    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);

    const getMenuData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`)
            .then(res => res.json())
            .then(menu => setData(menu))
            .catch(err => console.log(err.message));
    }

    useEffect(() => {
        getMenuData();
    }, []);

    useEffect(() => {
        setItems(data);
    }, [data]);

    const handleFilterActive = (id: number) => {
        filters.map(filter => {
            filter.active = false;
            if (filter.id === id) filter.active = true
        })
    }

    const handleFilterChange = (id: number, category: string) => {

        handleFilterActive(id);
        if (category === 'all') {
            setItems(data);
        } else {
            setItems(
                data.filter((item: { category: string }) => item.category === category)
            )
        }
    };


    return (
        <section id='menu' className='menu section-bg'>
            <div className='container' data-aos='fade-up'>
                <SectionTitle title='Notre Type activite' subtitle='Voici tous les liste des activitées dans notre Cabinet AEG' />

                <div className='row' data-aos='fade-up' data-aos-delay='100'>
                    <div className='col-lg-12 d-flex justify-content-center'>
                        <ul id='menu-filters'>
                            {filters.map(filter => (
                                <li
                                    key={filter.id}
                                    className={`${filter.active ? 'filter-active' : undefined}`}
                                    onClick={() => handleFilterChange(filter.id, filter.category)}
                                >
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className='row menu-container'
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    {!items ? (
                        <Preloader />

                    ) : items.length > 0 ? (
                        items.map(
                            (item: {
                                id: number,
                                name: string,
                                preview: string,
                                botton: string,
                                subname: string;
                            }) => <MenuItem key={item.id} item={item} />
                        )
                    ) : (
                        <Preloader />
                    )}



                </div>

            </div>

        </section>
    )
}
