import { Link } from 'react-router-dom';

import './style.scss';

const Footer = () => {
   return(
         <footer className="footer">
            <div className="container footer__container">
                <div className="footer__subscribe subscribe">
                    <h2 className="subscribe__title">Підписатися на новини</h2>
                    <form className="subscribe__form" action="#">
                        <label className="subscribe__label" for="subscribe-email">Email: </label>
                        <input className="subscribe__text" type="text" name="subsribe" id="subscribe-email" />
                        <input className="subscribe__btn" type="submit" value="" />
                    </form>
                </div>
                <div className="footer__row">
                    <div className="footer__info-block block">
                        <h2 className="block__title">Колекції</h2>
                        <ul className="block__list list-reset">
                            <li className="block__item"><Link className="block__link" to="#">Ubaro</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Byzaro</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Neolitic</Link></li>
                        </ul>
                    </div>
                    <div className="footer__info-block block">
                        <h2 className="block__title">Інформація</h2>
                        <ul className="block__list list-reset">
                            <li className="block__item"><Link className="block__link" to="#">Акції</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Рекомендовані товари</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Доставка</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Співробітництво</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Повернення товару</Link></li>
                        </ul>
                    </div>
                    <div className="footer__info-block block">
                        <h2 className="block__title">Колекції</h2>
                        <ul className="block__list list-reset">
                            <li className="block__item"><Link className="block__link" to="#">Ubaro</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Byzaro</Link></li>
                            <li className="block__item"><Link className="block__link" to="#">Neolitic</Link></li>
                        </ul>
                    </div>
                    <div className="footer__info-block block block--wide">
                        <h2 className="block__title">Контакти</h2>
                        <ul className="block__list list-reset">
                            <li className="block__item">
                                <Link className="block__link block__link--small" to="tel:+380993676816">
                                <svg className="icon-phone" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                +38 099 367 68 16
                                </Link>
                            </li>
                            <li className="block__item">
                                <Link title="lavkaoberegovemail@gmail.com" className="block__link block__link--small"
                                to="mailto:lavkaoberegovemail@gmail.com">
                                    <svg className="icon-mail" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round"
                                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                    info@larpradeda.com
                                </Link>
                            </li>
                            <li className="block__item">
                                <svg className="icon-map" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                                м. Харків 61091
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_feedback">
                <Link to="" className="btn btn-reset inline-block">Напишіть нам</Link>
                <p>Ми з радістю відповімо на всі ваші запитання</p>
                </div>
            </div>
        </footer>
   )
}
export { Footer }