import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../img/sprite.svg';
import products from '../../helpers/products';

const MiniCart = () => {
    const [cart, setCart] = React.useState({});
    const [count, setCount] = React.useState(0);    

    let total = 0;

    React.useEffect(() => {
        const ClickAddToCart = (event) => {
            event.preventDefault();
            if (!event.target.classList.contains('add-to-cart')) return false;
            
            let cartTemp = cart;
            if (cartTemp[event.target.dataset.sku]) {
                cartTemp[event.target.dataset.sku]["qnt"]++;
            } else {
                for (let i = 0; i < products.length; i++) {
                    if (products[i].sku === event.target.dataset.sku ) {
                        cartTemp[products[i].sku] = {
                            "id" : products[i].id,
                           "title" : products[i].title,
                            "image" : products[i].image,
                            "price" : products[i].price,
                            "url" : products[i].url,
                            "qnt" : 1,
                        }
                    }
                }                
            }
            setCart(cartTemp);
            let countTemp = Object.keys(cart).length;
            setCount(countTemp);
        }

        document.addEventListener('click', ClickAddToCart);

        return () => {
            document.removeEventListener('click', ClickAddToCart);
        };
    });



    const renderObj = () => {
        let out = [];
        let k= 0;

        for (let key in cart) {
            k += 1;
            total += cart[key].qnt * cart[key].price;


            out.push(
                <li key={k} className="mini-cart__item">
                    <Link className="mini-cart__remove-from-cart-button" to="/">
                        <svg className="icon-remove-button" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <use href={sprite + '#remove'}></use>
                        </svg>
                    </Link>
                    <Link className="mini-cart__link" href={cart[key].url}>
                        <img className="mini-cart__img" width="324" height="324" src={cart[key].image}
                            alt={cart[key].title} />
                        {cart[key].title}
                    </Link>
                    <span className="mini-cart__quantity">{cart[key].qnt} ×
                        <bdi>
                            {cart[key].price}&nbsp;
                            <span>₴</span>
                        </bdi>
                    </span>
                </li>
            )
        }

        return out;
    }

    
    let showCart;

    if (Object.keys(cart).length !== 0 ) {
        showCart = renderObj();
    } else {
        showCart = 'Cart is empty';
    }
   
   return(
       <div data-cart className="header__cart mini-cart">           
            <Link className="mini-cart__btn" to="/" title="Переглянути кошик">
                <svg className="mini-cart__cart-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <use href={sprite + '#cart'}></use>
                </svg>
                <div className="mini-cart__cart-quantity">{count}</div>
            </Link>
            <div data-mini-cart className="mini-cart__cart-menu">
                <ul className="mini-cart__list list-reset">
                    {showCart}
                </ul>

                <p className="mini-cart__total">
                   <strong>Разом: {total}</strong>
                    <span>
                    <bdi>
                        <span>₴</span>
                           
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