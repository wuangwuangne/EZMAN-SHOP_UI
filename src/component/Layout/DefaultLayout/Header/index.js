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
            </div>

            <div>
                <div className={cx('header-search')}>
                    <div className={cx('header-login')}>
                        <a href="/users">
                            <FaUser />
                        </a>
                    </div>

                    <p>
                        <h4>
                            <IoIosSearch style={{ marginRight: 10 }} />
                        </h4>
                        <input placeholder="Nhập sản phẩm muốn tìm kiếm "></input>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
