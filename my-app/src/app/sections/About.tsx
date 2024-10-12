import React from 'react'
import aboutImage from '../../../public/assets/images/about.jpg'
import './about.css'
import Image from 'next/image'

export default function About() {
    return (
        <section id='about' className='about'>
            <div className='container' data-aos='fade-up'>
                <div className="row">
                    <div
                        className='col-lg-6 order-1 order-lg-2'
                        data-aos='zoom-in'
                        data-aos-delay='100'
                    >
                        <div className="about-img">
                            <Image src={aboutImage} alt='' />
                        </div>
                    </div>
                    <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'>
                        <h3 className='title'>
                            A propos du Cabinet AEG :
                        </h3>
                        <p className='description fst-italic text-justify-content-center'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odit magnam qui, itaque, neque atque labore quia delectus reiciendis quis ipsam reprehenderit quaerat. Nisi non assumenda obcaecati ab error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum dolores voluptatem quis nam beatae expedita explicabo placeat debitis voluptates, quod, eos est eveniet molestias reprehenderit, ullam non alias natus!
                        </p>
                        <ul>
                            <li><span>¤</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                            <li><span>¤</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                            <li><span>¤</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                        </ul>
                        <p className='description fst-italic text-justify-content-center'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odit magnam qui, itaque, neque atque labore quia delectus reiciendis quis ipsam reprehenderit quaerat. Nisi non assumenda obcaecati ab error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum dolores voluptatem quis nam beatae expedita explicabo placeat debitis voluptates, quod, eos est eveniet molestias reprehenderit, ullam non alias natus!
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
