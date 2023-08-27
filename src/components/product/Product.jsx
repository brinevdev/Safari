import './product.scss';


const Product = ({id,img,title,price}) => {
    return (
        <article className="shop__item card">
        <div className="card__top">
            <a className="card__image" href=""><img src={img} alt="" /></a>
            <div className="card__actions">
                <button className="card__button card__button-favorite"><img src="img/icons/favorites 2.svg" alt="" /></button>
                <button className="card__button card__button-cart">ADD TO CART</button>
            </div>
        </div>
        <div className="card__body">
            <h3 className="card__title"><a href="">{title}</a></h3>
            <div className="card__price">{price}</div>
        </div>
    </article>
    )
}

export default Product