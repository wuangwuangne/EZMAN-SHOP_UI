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
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/shoes">Giày</Link>
                        </li>
                        <li>
                            <Link to="/foots"> Dép</Link>
                        </li>
                        <li>
                            <Link to="/others"> phụ kiện</Link>
                        </li>

                        <li>
                            <Link to="/size">size chart</Link>
                        </li>
                        <li>
                            <Link to="#FOOTER">about us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className={cx('header-search')}>
                    <div className={cx('header-login')}>
                        <Link to="/users">
                            <FaUser />
                        </Link>
                    </div>

                    <div className={cx('p')}>
                        <h4>
                            <IoIosSearch style={{ marginRight: 10 }} />
                        </h4>
                        <input placeholder="Nhập sản phẩm muốn tìm kiếm "></input>
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
