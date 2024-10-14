import React from 'react'
import './contact.css'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
    return (
        <section id='contact' className='contact'>
            <div className='container' data-aos='fade-up'>
                <SectionTitle title='Contact' subtitle='Veuillez nous contacter' />
            </div>

            <div data-aos='fade-up'>
                <iframe
                    style={{ border: 0, width: '100%', height: '350px' }}
                    src='https://www.google.com/maps/place/ESMIA/@-18.9227454,47.5229166,17z/data=!3m1!4b1!4m6!3m5!1s0x21f07e752e92ee85:0x76690898b30e6cf5!8m2!3d-18.9227505!4d47.5254915!16s%2Fg%2F11c2kcpvng?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'//Mettre le lien 
                    allowFullScreen
                ></iframe>
            </div>

            <div className='container' data-aos='fade-up'>
                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <div className='info'>
                            <div className='address'>
                                <i className='bi bi-geo-all'></i>
                                <h4>Localisation:</h4>
                                <p>100 Your Street, your city, State 1234</p>
                            </div>

                            <div className='open-hours'>
                                <i className='bi bi-clock'></i>
                                <h4>Heure ouverture:</h4>
                                <p>
                                    Lundi - Samedi
                                    <br />
                                    08h - 17h
                                </p>
                            </div>

                            <div className='email'>
                                <i className='bi bi-envelope'></i>
                                <h4>Email:</h4>
                                <p>CabinetAEG@gmail.com</p>
                            </div>

                            <div className='phone'>
                                <i className='bi bi-phone'></i>
                                <h4>Appel:</h4>
                                <p>+262 629 16 57 44</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-8 mt-5 mt-lg-0'>
                        <form action="" className='contact-form' role='form'>
                            <div className='row'>
                                <div className='col-md-6 form-group'>
                                    <input
                                        type="text"
                                        name='name'
                                        className='form-control'
                                        id='name'
                                        placeholder='Entrer votre nome'
                                        required
                                    />
                                </div>
                                <div className='col-md-6 form-group mt-3 mt-md-0'>
                                    <input
                                        type="email"
                                        name='email'
                                        className='form-control'
                                        id='email'
                                        placeholder='Entrer votre email'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='form-group mt-3'>
                                <input
                                    type="text"
                                    name='subject'
                                    className='form-control'
                                    id='subject'
                                    placeholder='Sujet'
                                    required
                                />
                            </div>
                            <div className='form-group mt-3'>
                                <textarea
                                    className='form-control'
                                    name='message'
                                    id='message'
                                    rows={8}
                                    placeholder='Votre Message'
                                    required
                                ></textarea>
                            </div>
                            <div className='my-3'>
                                <div className='loading'>Loading</div>
                                <div className='error-message'></div>
                                <div className='sent-message'>
                                    Votre message à bien était envoyé . Mercie!
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type='submit'>Envoie Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
