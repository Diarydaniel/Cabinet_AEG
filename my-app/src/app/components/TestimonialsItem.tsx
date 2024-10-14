import React from 'react'
import './testimonialsItem.css'

export default function TestimonialsItem({
    item,
}: {
    item: {
        id: number;
        content: string;
        avatar: string;
        client: string;
        position: string;
    };
}) {
    return (
        <div className='testimonial-item'>
            <p>
                <i className='content bx bxs-qoute-all-left quote-icon-left'></i>
                {item.content}
                <i className='bx bxs-qoute-all-right quote-icon-right'></i>
            </p>
            <img src={item.avatar} className='testimonial-img' alt="" />
            <h3 className='client'>{item.client}</h3>
            <h4>{item.position}</h4>
        </div>
    )
}
