import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6'>
                            <div className='footer-info'>
                                <h3 className='title'>Cabinet AEG</h3>
                                <p>
                                    100 Your Street
                                    <br />
                                    State 123 , AUG
                                    <br /><br />
                                    <strong>Phone :</strong> +262 629 16 57 44
                                    <br />
                                    <strong>Email :</strong> CabinetAEG@gmail.com
                                    <br />
                                </p>
                                <div className='social-links mt-3'>
                                    <a href="" className='twitter'>
                                        <i className='bi bi-twitter-x'></i>
                                    </a>
                                    <a href="" className='facebook'>
                                        <i className='bi bi-facebook'></i>
                                    </a>
                                    <a href="" className='instagram'>
                                        <i className='bi bi-instagram'></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6 footer-links'>
                            <h4>Liens utiles</h4>
                            <ul>
                                <li>
                                    <i className='bx bx-chevron-right'></i><a href="#">Accuiel</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{''}
                                    <a href="#">À propos</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i><a href="#">Services</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i><a href="#">Evénements</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{''}
                                    <a href="#">Photos</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-6 footer-links'>
                            <h4>Nos prestations</h4>
                            <ul>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{''}
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{''}
                                    <a href="#">Evénements</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{''}
                                    <a href="#">Fonctions</a>
                                </li>

                            </ul>
                        </div>

                        <div className='col-lg-4 clo-md-6 footer-newsletter' >
                            <h4>Notre newsletter </h4>
                            <p className='news'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, tempora. Assumenda esse ratione placeat doloribus nesciunt necessitatibus mollitia reprehenderit nihil, odio iusto modi architecto veritatis! Quia nemo aut eligendi ipsa.
                            </p>
                            <form action="" method='POST'>
                                <input type="email" name='email' />
                                <input type="submit" value='Subscribe' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='copyright'>
                    &copy; Copyright{' '}
                    <strong>
                        <span>Cabinet AEG</span>
                    </strong>
                    .Tous droits réservés
                </div>
                <div className='credits'>
                    Conçu par <a href="https://web.facebook.com/profile.php?id=61552797063357">Mi-Design</a>
                </div>

            </div>

        </footer>
    )
}
