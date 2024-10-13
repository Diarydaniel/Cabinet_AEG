import React from 'react'
import SectionTitle from '../components/SectionTitle';
import ChefsItem from '../components/ChefsItem';


async function getChefsData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chefs`);
    return res.json();

}
export default async function chefs() {
    const items: [] = await getChefsData();


    return (
        <section id='chefs' className='chefs'>
            <div className='container' data-aos="fade-up">
                <SectionTitle
                    title='Responsables'
                    subtitle='Les Responsables du Cabinet AEG'
                />

                <div className='row'>
                    {items &&
                        items.length > 0 &&
                        items.map(
                            (item: {
                                id: number;
                                name: string;
                                photo: string;
                                position: string;
                                delay: string;
                            }) => <ChefsItem key={item.id} item={item} />
                        )
                    }

                </div>

            </div>

        </section>
    )
}
