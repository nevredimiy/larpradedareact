import sprite from '../../img/sprite.svg';

const MiniCart = () => {
   return(
<div data-cart className="header__cart mini-cart">
    <a className="mini-cart__btn" href="/" title="Переглянути кошик">
    <svg className="mini-cart__cart-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <use href={sprite + '#cart'}></use>
    </svg>
    <div className="mini-cart__cart-quantity">10</div>
    </a>
    <div data-mini-cart className="mini-cart__cart-menu">
    <ul className="mini-cart__list list-reset">
        <li className="mini-cart__item">
        <a className="mini-cart__remove-from-cart-button" href="/">
            <svg className="icon-remove-button" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <use href={sprite + '#remove'}></use>
            </svg>
        </a>
        <a className="mini-cart__link" href="/">
            <img className="mini-cart__img" width="324" height="324" src="./img/blin-na-shtangu.jpeg"
            alt="Млин для штанги" />
            Підвіска Млин для штанги (30мм 11г)
        </a>
        <span className="mini-cart__quantity">1 ×
            <bdi>
            2100&nbsp;
            <span>₴</span>
            </bdi>
        </span>
        </li>
        <li className="mini-cart__item">
        <a className="mini-cart__remove-from-cart-button" href="/">
            <svg className="icon-remove-button" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <use href={sprite + '#remove'}></use>
            </svg>
        </a>
        <a className="mini-cart__link" href="/">
            <img className="mini-cart__img" width="324" height="324" src="./img/blin-na-shtangu.jpeg"
            alt="Млин для штанги" />
            Підвіска Млин для штанги (30мм 11г)
        </a>
        <span className="mini-cart__quantity">1 ×
            <bdi>
            2100&nbsp;
            <span>₴</span>
            </bdi>
        </span>
        </li>
        <li className="mini-cart__item">
        <a className="mini-cart__remove-from-cart-button" href="/">
            <svg className="icon-remove-button" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <use href={sprite + '#remove'}></use>
            </svg>
        </a>
        <a className="mini-cart__link" href="/">
            <img className="mini-cart__img" width="324" height="324" src="./img/blin-na-shtangu.jpeg"
            alt="Млин для штанги" />
            Підвіска Млин для штанги (30мм 11г)
        </a>
        <span className="mini-cart__quantity">1 ×
            <bdi>
            2100&nbsp;
            <span>₴</span>
            </bdi>
        </span>
        </li>
    </ul>

    <p className="mini-cart__total">
        <strong>Разом: </strong>
        <span>
        <bdi>
            <span>₴</span>
            300
        </bdi>
        </span>
    </p>
    <p className="mini-cart__buttons">
        <a href="/" className="mini-cart__button btn">До
        кошика</a>
        <a href="/" className="mini-cart__button btn">Оформити
        замовлення</a>
    </p>
    </div>
</div>   
   )
}
export { MiniCart }