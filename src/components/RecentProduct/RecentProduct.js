import ProductItem from "../ProductItem/ProductItem";

import './style.scss';
import products from '../../helpers/products.json';


function RecentProduct() {
    return (
            <section className="recent-products">
                <div className="container">
                    <h2 className="recent-products__title">Новинки</h2>

                <ul className="recent-products__products products list-reset">
                    {
                        products.map(item => {
                            return <ProductItem key={item.id} url={item.url} image={item.image} title={item.title} price={item.price} newPrice={item.new_price} sku={item.sku} />
                        })
                    }                        
                </ul>

                </div>
            </section>
        )
}

export default RecentProduct;