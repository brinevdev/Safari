import './footer.scss';
import FacebookIcon from './../../resources/img/icons/facebook.svg';
import TwitterIcon from './../../resources/img/icons/twitter.svg';
import InstagramIcon from './../../resources/img/icons/instagram.svg';
import Logo from './../../resources/img/header/Logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__logo"><img src={Logo} alt="logo"/></div>
        <div className="footer__body body-footer">
            <nav className="body-footer__menu">
                <ul className="menu__list">
                    <li><a href="">About us</a></li>
                    <li><a href="">Contacts</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                </ul>
            </nav>
            <div className="body-footer__social social">
                <ul className="social__list">
                    <li href="" className="social__item social__item-facebook">
                        <a href=""><img src={FacebookIcon} alt="facebook"/></a> 
                        <a href="">Facebook</a>
                    </li>
                    <li href="" className="social__item social__item-twitter">
                        <a href=""><img src={TwitterIcon} alt="twitter"/></a>
                        <a href="">Twitter</a>
                    </li>
                    <li href="" className="social__item social__item-instagram">
                       <a href=""><img src={InstagramIcon} alt="instagram"/></a> 
                        <a href="">Instagram</a>
                    </li>
                </ul>
            </div>
            <div className="body-footer__form form-body-footer">
                <div className="form-body-footer__title">Subscribe to our newsletter</div>
                <div className="form-body-footer__input">
                    <input type="email" placeholder="email address"/>
                    <button>Ok</button>
                </div>
            </div>
        </div>
        <div className="footer__contacts contacts">
            <span>497 Evergreen Rd. Roseville, CA 95673</span>
            <a href="tel:44375643393">44375643393</a>
            <a href="mailto:safari_shop@mail.com">safari_shop@mail.com</a>
        </div>
    </footer>
    )
}

export default Footer;