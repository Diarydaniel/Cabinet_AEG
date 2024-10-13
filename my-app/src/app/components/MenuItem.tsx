import React from 'react';
import './menuItem.css';
import Link from 'next/link';

export default function MenuItem({ item }: {
    item: {
        id: number,
        name: string,
        preview: string,
        botton: string,
        subname: string;
    }
}) {
    return (
        <div className='col-lg-6 menu-item'>
            {/* <img src={item.preview} className='menu-img' alt="image" /> */}
            <div className='menu-content'>
                <Link href={`/menu/${item.id}`}>{item.name}</Link>
                <span>{item.botton}</span>
            </div>
            <div className='menu-ingredients'>{item.subname}</div>
        </div>
    );
}
