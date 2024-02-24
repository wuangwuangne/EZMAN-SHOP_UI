import classNames from 'classnames/bind';
import styles from './Home.module.scss';
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
                        <a href="https://censor.vn/giay-hot-nhat-hien-nay/" className={cx('news-item')} target="blank">
                            <img src="img/News/news1.png" />
                            <div className={cx('news-normal')}>
                                <div className={cx('news-title')}>[GIÀY HOT 2023] NHỮNG MẪU GIÀY HOT NHẤT NĂM 2023</div>
                                <div className={cx('news-info')}>
                                    <i>05/01/2023</i>
                                </div>
                                <div className={cx('news-decription')}>NĂM MỚI ƯU ĐÃI LỚN</div>
                            </div>
                        </a>
                        <a href="https://vn.my-best.com/35795" className={cx('news-item')} target="blank">
                            <img src="img/News/news2.png" />
                            <div className={cx('news-normal')}>
                                <div className={cx('news-title')}>[ƯU ĐÃI ĐẦU NĂM 2022] CLEAN 1 FREE 1</div>
                                <div className={cx('news-info')}>
                                    <i>05/01/2023</i>
                                </div>
                                <div className={cx('news-decription')}>
                                    NĂM MỚI ƯU ĐÃI LỚN EZ MAN xin chân trọng thông báo "CLEAN 1 FREE 1"
                                </div>
                            </div>
                        </a>
                        <a
                            href="https://www.toandepdep.com/dep-dep-the-thao/dep-nike-dang-hot.html"
                            className={cx('news-item')}
                            target="blank"
                        >
                            <img src="img/Slide/slide2.png" />
                            <div className={cx('news-normal')}>
                                <div className={cx('news-title')}>[ƯU ĐÃI ĐẦU NĂM 2022] CLEAN 1 FREE 1</div>
                                <div className={cx('news-info')}>
                                    <i>05/01/2023</i>
                                </div>
                                <div className={cx('news-decription')}>NĂM MỚI ƯU ĐÃI LỚN</div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* THƯƠNG HIỆU */}
                <div id="LOCAL" className="LOCAL">
                    <div className={cx('container')}>
                        <h3>Thương Hiệu</h3>
                    </div>
                    <div className={cx('local')}>
                        <div className={cx('img-local')}>
                            <div className={cx('tag')}>
                                <img src="/img/LOGO-BRAND/nike.jpg" alt=""></img>
                            </div>
                            <div className={cx('tag')}>
                                <img src="/img/LOGO-BRAND/vans.png" alt=""></img>
                            </div>
                            <div className={cx('tag')}>
                                <img src="/img/LOGO-BRAND/adidas.jpg" alt=""></img>
                            </div>
                            <div className={cx('tag')}>
                                <img src="/img/LOGO-BRAND/jodan.png" alt=""></img>
                            </div>
                            <div className={cx('tag')}>
                                <img src="/img/LOGO-BRAND/newbalen.png" alt=""></img>
                            </div>
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
