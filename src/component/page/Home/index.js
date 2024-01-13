import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Slider from '~/component/Layout/DefaultLayout/Slide';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('full-pageHome')}>
            <Slider />
            <div className={cx('container')}>
                <h3>Danh mục</h3>
            </div>

            <div className={cx('banner')}>
                <Link to={'/main'}>
                    <img src="/img/banner1.jpg" alt=""></img>
                    <p style={{ position: 'absolute', top: '50%', left: '50%' }}>HELO</p>
                </Link>
                <a href="#">
                    <img src="/img/banner2.jpg" alt=""></img>
                </a>
                <a href="#">
                    <img src="/img/banner3.png" alt=""></img>
                </a>
            </div>
            <div className={cx('container')}>
                <h3>Tin tức</h3>
            </div>
            <div className={cx('banner')}>
                <Link to={'/main'}>
                    <img src="/img/banner1.jpg" alt=""></img>
                    <p style={{ position: 'absolute', top: '50%', left: '50%' }}>HELO</p>
                </Link>
                <a href="#">
                    <img src="/img/banner2.jpg" alt=""></img>
                </a>
                <a href="#">
                    <img src="/img/banner3.png" alt=""></img>
                </a>
            </div>
            <div className={cx('container')}>
                <h3>Thương Hiệu</h3>
            </div>
            <div className={cx('banner')}>
                <Link to={'/main'}>
                    <img src="/img/banner1.jpg" alt=""></img>
                    <p style={{ position: 'absolute', top: '50%', left: '50%' }}>HELO</p>
                </Link>
                <a href="#">
                    <img src="/img/banner2.jpg" alt=""></img>
                </a>
                <a href="#">
                    <img src="/img/banner3.png" alt=""></img>
                </a>
            </div>
            <div className={cx('container')}>
                <h3>Đăng Ký nhận tin</h3>
            </div>
            <h2>Nhập địa chỉ email của bạn để được nhận tin tức mới nhất</h2>
            <div>
                <input placeholder="Nhập email của bạn"></input>
                <button>Đăng Kí</button>
            </div>
        </div>
    );
}

export default Home;
