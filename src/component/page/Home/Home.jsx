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
                        <a className={cx('block')} href={'/shoes'}>
                            <img src="/img/banner1.jpg" alt=""></img>
                            <button className={cx('button-hover')}>Giày</button>
                        </a>
                        <a className={cx('block')} href="/foots">
                            <img src="/img/banner2.jpg" alt=""></img>
                            <button className={cx('button-hover')}>Dép</button>
                        </a>
                        <a className={cx('block')} href="/others">
                            <img src="/img/banner3.png" alt=""></img>
                            <button className={cx('button-hover')}>Phụ kiện</button>
                        </a>
                    </div>
                </div>
                {/* Tin tức */}
                <div className={cx('NEWS')}>
                    <div className={cx('container')}>
                        <h3>Tin tức</h3>
                    </div>
                    <div className={cx('news')}>
                        <div className={cx('news-item')}>
                            <a href="https://tramtabo.vn/uu-dai-dac-biet-freeship-moi-noi-cho-terex" target="blank">
                                <div>
                                    <img src="img/slide3.png" />
                                </div>
                                <div className={cx('news-normal')}>
                                    <div className={cx('news-title')}>[ƯU ĐÃI ĐẦU NĂM 2022] CLEAN 1 FREE 1</div>
                                    <div className={cx('news-info')}>
                                        <i>05/01/2023</i>
                                    </div>
                                </div>
                                <div className={cx('news-hover')}>
                                    <div className={cx('news-decription')}>
                                        NĂM MỚI ƯU ĐÃI LỚN Bé khủng long Terex xin chân trọng thông báo "CLEAN 1 FREE 1"
                                        chỉ trong hôm nay và mai 01-02/01 nhé bà con cô bác ơi Đầu năm đầu tháng, ghé
                                        Terex chơi...
                                    </div>
                                </div>
                            </a>
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
