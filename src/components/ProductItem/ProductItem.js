import { Link } from "react-router-dom";

function ProductItem({url, image, title, price, newPrice, sku}) {
    return (
        <>
            <li className="products__item">
                        <Link className="products__link" to={url}>
                        <img src={image} alt={title} className="products__img" />
                        <h3 className="products__title">{title}</h3>
                        <span className="onsale">Розпродаж!</span>
                        <span className="price">
                            <span className="price__old">
                            <bdi>{price}&nbsp;
                                <span className="price__currencySymbol">₴</span>
                            </bdi>
                            </span>
                            <span className="price__new">
                            <bdi>{newPrice}&nbsp;
                                <span className="price__currencySymbol">₴</span>
                            </bdi>
                            </span>
                        </span>
                        </Link>
                        <Link to="#" data-sku={sku} className="products__btn btn btn-reset inline-block add-to-cart">Додати в кошик</Link>
                    </li>
 
            </>
    )
}
export default ProductItem;