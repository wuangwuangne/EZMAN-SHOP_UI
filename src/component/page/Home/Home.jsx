import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Slider from '~/component/Layout/DefaultLayout/Slide';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div>
                <Slider />
            </div>
            <div className={cx('full-pageHome')}>
                {/* Danh mục */}
                <div className={cx('MENU')}>
                    <div id="LIST" className={cx('container')}>
                        <h3>Danh mục</h3>
                    </div>
                    <div className={cx('banner')}>
                        <Link to={'/shoes'}>
                            <img src="/img/banner1.jpg" alt=""></img>
                        </Link>
                        <a href="/foots">
                            <img src="/img/banner2.jpg" alt=""></img>
                        </a>
                        <a href="/others">
                            <img src="/img/banner3.png" alt=""></img>
                        </a>
                    </div>
                </div>
                {/* Tin tức */}
                <div className={cx('NEWS')}>
                    <div className={cx('container')}>
                        <h3>Tin tức</h3>
                    </div>
                    <div className={cx('news')}>
                        <div>
                            <h5>
                                cc
                                <img src="img/silde3.png" />
                            </h5>
                        </div>
                    </div>
                </div>
                {/* THƯƠNG HIỆU */}
                <div id="LOCAL" className="LOCAL">
                    <div className={cx('container')}>
                        <h3>Thương Hiệu</h3>
                    </div>
                    <div className={cx('local')}>
                        <div className={cx('img-local')}>
                            <img src="/img/nike.jpg" alt=""></img>
                            <img src="/img/vans.png" alt=""></img>
                            <img src="/img/adidas.jpg" alt=""></img>
                            <img src="/img/jodan.png" alt=""></img>
                            <img src="/img/newbalen.png" alt=""></img>
                        </div>
                    </div>
                </div>
                {/* ĐĂNG KÝ NHẬN TIN */}
                <div className={cx('SIGN')}>
                    <div className={cx('container')}>
                        <h3>Đăng Ký nhận tin</h3>
                    </div>
                    <h2>Nhập địa chỉ email của bạn để được nhận tin tức mới nhất</h2>
                    <div className={cx('input')}>
                        <input className={cx('input-n')} placeholder="Nhập email của bạn"></input>
                        <button>Đăng kí</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
