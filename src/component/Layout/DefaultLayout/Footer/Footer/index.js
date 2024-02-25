import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { RiTiktokLine } from 'react-icons/ri';
import { SlSocialFacebook } from 'react-icons/sl';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { SiShopee } from 'react-icons/si';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')} id="FOOTER">
            <div className={cx('middle')}>
                <div>
                    <h4 className={cx('private')}>LIÊN HỆ</h4>
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
                            href="https://www.google.com/maps/place/11+Nguy%E1%BB%85n+Tr%C3%A3i,+H%C3%B2a+Hi%E1%BA%BFu,+TX.+Th%C3%A1i+H%C3%B2a,+Ngh%E1%BB%87+An,+Vi%E1%BB%87t+Nam/@19.3224747,105.4260162,18z/data=!3m1!4b1!4m10!1m2!2m1!1zU-G7kSAxMSBuZ3V54buFbiB0csOjaSAoIMSQ4bqndSBD4bqndSBIaeG6v3UgMSApLCBUaMOhaSBIw7VhLCBWaWV0bmFt!3m6!1s0x313715731e7004bb:0x1acef8ee0f8889cc!8m2!3d19.3224747!4d105.4284517!15sCkVT4buRIDExIG5ndXnhu4VuIHRyw6NpICggxJDhuqd1IEPhuqd1IEhp4bq_dSAxICksIFRow6FpIEjDtWEsIFZpZXRuYW2SARBnZW9jb2RlZF9hZGRyZXNz4AEA!16s%2Fg%2F11ghtcc39b?hl=vi-VN&entry=ttu"
                            target="blank"
                        >
                            <FaLocationDot />
                            Số 11 nguyễn trãi ( Đầu Cầu Hiếu 1 ), Thái Hõa, Vietnam
                        </a>
                    </div>
                </div>

                <div className={cx('contact')}>
                    <h4 className={cx('private')}>FANPAGE</h4>
                    <div className={cx('product')}>
                        <a href="https://www.facebook.com/EZMANSNEAKER" target="blank">
                            <img className={cx('img-footer')} src="img/Footer.png" alt=""></img>
                        </a>
                    </div>

                    <h4>FOLLOW US</h4>

                    <div className={cx('logo-contact')}>
                        <Link to="https://www.tiktok.com/@ezman_sneaker" target="blank">
                            <RiTiktokLine />
                        </Link>
                        <Link to="https://www.facebook.com/EZMANSNEAKER" target="blank">
                            <SlSocialFacebook />
                        </Link>
                        <Link to="https://www.instagram.com/" target="blank">
                            <FaInstagram />
                        </Link>
                        <Link to="https://shopee.vn/" target="blank">
                            <SiShopee />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                © Bản quyền thuộc về EZMANSNEAKER | Cung cấp bởi{' '}
                <a href="https://www.facebook.com/HoNgocQuocKhanh" target="blank">
                    Hồ Khánh ĐZ
                </a>
            </div>
        </div>
    );
}

export default Footer;
