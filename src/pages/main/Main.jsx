import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchProducts } from '../../store/shopSlice';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SliderImage from './../../resources/img/main/slider/engin.png';
import ArrowDownIcon from './../../resources/img/icons/arrow-down.svg';
import ProductList from '../../components/productList/ProductList';
import 'swiper/scss';
import './main.scss';




const Main = () => {
    const dispatch = useDispatch();
    const {products}= useSelector(state => state.shop.data);
  
    const slideToShop = (e) => {
        const headerHeight = document.querySelector('.header').offsetHeight || 0;
        const shop = document.querySelector('.shop');
        const top = getCoords(shop).top;
        window.scrollTo({
          top: top-headerHeight,
          left: 0,
          behavior: "smooth",
        })
    }

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }

    useEffect(()=> {
        dispatch(fetchProducts())
    },[])

    return (
        <div className="wrapper">
        <Header/>
         <main className="main">
        <section className="page">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide> 
        <div className="swiper-slide">
            <img src={SliderImage} alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="swiper-slide">
        <img src={SliderImage} alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="swiper-slide">
        <img src={SliderImage} alt="" />
        </div>
        </SwiperSlide>
    </Swiper>
        <div className="page__body">
            <div className="swiper-pagination"></div>
            <div className="page__goto">
                <div> Explore our collection</div>
                <button className="goto__button" onClick={(e) => slideToShop()}> <img src={ArrowDownIcon} alt="" /></button>
            </div>
        </div>
    </section>
    <section className="shop">
        <div className="shop__header">
            <div className="shop__title"><span>Shop your style</span></div>
            <div className="shop__subtitle">Welcome to Safari, where style meets adventure! Explore our curated collection of clothing, accessories, and footwear that embody the spirit of untamed exploration. From rugged outdoor gear to chic urban ensembles, Safari offers a diverse range of fashion that adapts to both the concrete jungle and the wild unknown. Step into Safari and make every outing a fashion-forward expedition.
            </div>
        </div>
        <div className="shop__container">
            <ProductList products = {products}/>
            <div className="shop__pagination pagination">
                <a href="" className="pagination__arrow pagination__arrow-back"><img src="./img/icons/arrow.svg" alt="" /></a>
                <div className="pagination__items">
                    <a href="" className="pagination__item pagination__item-active">1</a>
                    <a href="" className="pagination__item">2</a>
                    <a href="" className="pagination__item">3</a>
                </div>
                <a href="" className="pagination__arrow pagination__arrow-forward"><img src="./img/icons/arrow.svg" alt="" /></a>
            </div>
        </div>
    </section>
        </main>
        <Footer/>
        </div>
         
       
    )
}



export default Main;
