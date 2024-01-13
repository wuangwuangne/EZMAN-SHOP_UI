import classNames from 'classnames/bind';
import styles from './Footer/Footer.module.scss';
import { RiTiktokLine } from 'react-icons/ri';
import { SlSocialFacebook } from 'react-icons/sl';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('middle')}>
                <div>
                    <h4>LIÊN HỆ</h4>
                    <div className={cx('contact')}>
                        <p>Email: tranandi1111@gmail.com</p>
                        <p>Email: tranandi1111@gmail.com</p>
                        <p>Email: tranandi1111@gmail.com</p>
                        <p>Email: tranandi1111@gmail.com</p>
                    </div>
                </div>

                <div>
                    <h4>FANPAGE</h4>
                    <div className={cx('product')}>
                        <a href="https://www.facebook.com/EZMANSNEAKER" target="blank">
                            <img className={cx('img-footer')} src="img/Footer.png" alt=""></img>
                        </a>
                    </div>
                </div>
                <div>
                    <h4>FOLLOW US</h4>
                    <div className={cx('logo-contact')}>
                        <a href="">
                            <RiTiktokLine />
                        </a>
                        <a href="https://www.facebook.com/EZMANSNEAKER">
                            <SlSocialFacebook />
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                © Bản quyền thuộc về Trạm Tabo | Cung cấp bởi{' '}
                <a href="https://www.facebook.com/profile.php?id=100020162593131" target="blank">
                    Wuang Wuang ĐZ
                </a>
            </div>
        </div>
    );
}

export default Footer;
