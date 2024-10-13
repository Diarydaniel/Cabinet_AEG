import React from 'react'
import './eventsItem.css';

export default function EventsItem({
    item,
}: {
    item: {
        id: number,
        images: string,
        title: string,
        price: number,
        content: string,
        details: string[],
        summary: string,
    };
}) {
    return (
        <div className='row event-item'>
            <div className="col-lg-6">
                <img src={item.image} className='image img-fluid' alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>{item.title}</h3>
                <div className='price'>
                    <p>
                        <span>${item.price}</span>
                    </p>
                </div>
                <p className='content fst-italic'>{item.content}</p>
                <ul>
                    {item.details.length > 0 &&
                        item.details.map((detail, index) => (
                            < li key={index}>
                                <i className='bi bi-check2-circle'></i>{detail}
                            </li>
                        ))
                    }
                </ul>
                <p>{item.summary}</p>
            </div>
        </div >
    )
};
