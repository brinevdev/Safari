import { useEffect } from 'react';
import Logo from './../../resources/img/header/Logo.svg';
import SearchIcon from './../../resources/img/icons/search.svg';
import CartIcon from './../../resources/img/icons/cart.svg';
import ProfileIcon from './../../resources/img/icons/profile.svg';
import FavoritesIcon from './../../resources/img/icons/favorites.svg';
import './header.scss';



const Header = () => {

    useEffect(() => {
        const menuIcon = document.querySelector('.menu__icon');
        const body = document.querySelector('body');
        const header = document.querySelector('.header');
        menuIcon.addEventListener('click',(e)=>{
            body.classList.toggle('active');
        });
        window.addEventListener('scroll', () => {
        const top = getCoords(header).top;
        if (top >=80) {
            header.classList.add('_header-scroll');
        } else {
            header.classList.remove('_header-scroll');
        }
        })
        function getCoords(elem) {
            let box = elem.getBoundingClientRect();
            return {
                top: box.top + window.pageYOffset,
                right: box.right + window.pageXOffset,
                bottom: box.bottom + window.pageYOffset,
                left: box.left + window.pageXOffset
            };
        }
        const actionsHeader = document.querySelector('.actions-header');
        const search = document.querySelectorAll('.actions-header__form')
        if (actionsHeader) {
            document.addEventListener('click',(e) => {
                if (e.target.closest('.actions-header__form')) {
                    e.preventDefault()
                    actionsHeader.classList.add('_active');
                } else {
                    actionsHeader.classList.remove('_active');
                }
            });
        }   
    }, [])
    return (
        <header className="header">
        <div className="header__container">
            <div className="header__menu menu">
                <button type="button" className="menu__icon icon-menu"><span></span></button>
                <nav className="menu__body">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="index" className="menu__link menu__link-active">Home</a></li>
                        <li className="menu__item"><a href="catalog" className="menu__link">Clothes</a></li>
                        <li className="menu__item"><a href="Shoes" className="menu__link">Shoes</a></li>
                        <li className="menu__item"><a href="Accessories" className="menu__link">Accessories</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header__logo"><a href="index.html"><img src={Logo} alt="logo"></img></a></div>
           
            <div className="header__actions actions-header">
                <form className="actions-header__form" action="">
                    <input type="text" className="actions-header__input" placeholder="Search"></input>
                    <button className="actions-header__button"><img src={SearchIcon} alt="search"></img></button>
                </form>
                <div className="actions-header__body">
                    <a href="cart.html"><img src={CartIcon} alt="cart"></img></a>
                    <a href="information.html"><img src={ProfileIcon} alt="profile"></img></a> 
                    <a href="favorites.html"><img src={FavoritesIcon} alt="favorites"></img></a> 
                </div>
            </div>
        </div>
    </header>
    )
}


export default Header;