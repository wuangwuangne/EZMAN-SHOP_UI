import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '~/assets/LOGO.jpg';
import { IoIosSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <a href={'/'}>
                <img className={cx('logo')} src={logo} alt="1232" />{' '}
            </a>
            <div>
                <div className={cx('menu')}>
                    <ul>
                        <li>
                            <a href="/">home</a>
                        </li>
                        <li>
                            <a href="/shoes">Giày</a>
                        </li>
                        <li>
                            <a href="/foots"> Dép</a>
                        </li>
                        <li>
                            <a href="/others"> phụ kiện</a>
                        </li>

                        <li>
                            <Link to="/size">size chart</Link>
                        </li>
                        <li>
                            <a href="#FOOTER">about us</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('header-search')}>
                    <h4>
                        <IoIosSearch size={''} color="" />{' '}
                    </h4>
                    <input placeholder="Nhập sản phẩm muốn tìm kiếm "></input>
                </div>
            </div>

            <div className={cx('header-item')}>
                <div className={cx('header-login')}>
                    <a href="">
                        <FaUser style={{ marginRight: 10 }} /> Login
                    </a>
                    <a href="">Signup</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
