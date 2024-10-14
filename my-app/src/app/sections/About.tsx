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
                        <h3 className='title'> Présentation de notre Entreprise Cabinet AEG : </h3>
                        <p className='description fst-italic text-justify-content-center'> Le Cabinet AEG accompagne les entreprises et les particuliers dans la gestion administrative, RH, comptable, financière, ainsi que dans les domaines du marketing et de la prospection. Notre mission est de simplifier les processus pour que nos clients puissent se concentrer sur leur cœur de métier.
                        </p>
                        <ul>
                            <li>
                                <span>¤</span> Services administratifs : gestion d'agenda, recrutement, achats, et gestion des contrats.
                            </li>
                            <li>
                                <span>¤</span> Ressources humaines : gestion des dossiers salariés, paie, cotisations sociales, et absences.
                            </li>
                            <li>
                                <span>¤</span> Comptabilité et finance : suivi de trésorerie, facturation, recouvrement, et suivi budgétaire.
                            </li>
                            <li>
                                <span>¤</span> Commercial et marketing : prospection, gestion des réseaux sociaux, création de sites web et logos.
                            </li>
                        </ul>
                        <p className='description fst-italic text-justify-content-center'> Pour les particuliers, AEG propose également un accompagnement personnalisé : rédaction de CV, coaching d'entretien, aide à l'insertion professionnelle, et gestion des démarches administratives. Le Cabinet AEG reste à l'écoute de sa clientèle pour les aider à évoluer dans leur domaine professionnel et personnel.
                        </p>
                        <p className='description fst-italic text-justify-content-center'>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
