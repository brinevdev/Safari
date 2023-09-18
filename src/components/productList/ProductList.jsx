import Product from '../product/Product';
import './productList.scss';



const ProductList = ({products = []} ) => {
    products = products.slice(0,10);
    return (
        <div className="shop__items">
            {products.map((item) => <Product {...item} key = {item.id} />)}
        </div>
    )
}

export default ProductList;