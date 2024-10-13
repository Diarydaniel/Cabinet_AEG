import React from 'react'
import './whyUs.css';
import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';

async function getWhyUsData() {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/whyus`;
    const res = await fetch(apiUrl);

    // Vérifiez le statut de la réponse
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
}


export default async function WhyUs() {
    const items: [] = await getWhyUsData();
    return (
        <section id='why-us' className='why-us'>
            <div className='container'>
                <SectionTitle title='Pourquoi nous ?' subtitle='Pourquoi choisir notre Cabinet' />
                <div className='row'>
                    {items &&
                        items.length > 0 &&
                        items.map(
                            (
                                item: { id: number; title: string; content: string }
                            ) => <WhyUsCard key={item.id} item={item} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}


