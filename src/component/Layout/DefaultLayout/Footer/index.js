import classNames from 'classnames/bind';
import styles from './Footer/Footer.module.scss';
import { RiTiktokLine } from 'react-icons/ri';
import { SlSocialFacebook } from 'react-icons/sl';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')} id="FOOTER">
            <div className={cx('middle')}>
                <div>
                    <h4 h4 className={cx('private')}>
                        LIÊN HỆ
                    </h4>
                    <div className={cx('contact')}>
                        <p>
                            <MdOutlineEmail />
                            Email: hungnguyen079079@gmail.com
                        </p>
                        <p>
                            <IoCall />
                            Hotline: 033 456 5538
                        </p>
                        <a
                            href="https://www.google.com/maps/search/S%E1%BB%91+11+nguy%E1%BB%85n+tr%C3%A3i+(+%C4%90%E1%BA%A7u+C%E1%BA%A7u+Hi%E1%BA%BFu+1+),+Th%C3%A1i+H%C3%B5a,+Vietnam/@19.3226949,105.4255056,18z/data=!3m1!4b1?hl=vi-VN&entry=ttu"
                            target="blank"
                        >
                            <FaLocationDot />
                            Số 11 nguyễn trãi ( Đầu Cầu Hiếu 1 ), Thái Hõa, Vietnam
                        </a>
                    </div>
                </div>

                <div>
                    <h4 h4 className={cx('private')}>
                        FANPAGE
                    </h4>
                    <div className={cx('product')}>
                        <a href="https://www.facebook.com/EZMANSNEAKER" target="blank">
                            <img className={cx('img-footer')} src="img/Footer.png" alt=""></img>
                        </a>
                    </div>

                    <h4>FOLLOW US</h4>

                    <div className={cx('logo-contact')}>
                        <a href="https://www.tiktok.com/@ezman_sneaker" target="blank">
                            <RiTiktokLine />
                        </a>
                        <a href="https://www.facebook.com/EZMANSNEAKER" target="blank">
                            <SlSocialFacebook />
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                © Bản quyền thuộc về EZMANSNEAKER | Cung cấp bởi{' '}
                <a href="https://www.facebook.com/profile.php?id=100020162593131" target="blank">
                    Wuang Wuang ĐZ
                </a>
            </div>
        </div>
    );
}

export default Footer;
