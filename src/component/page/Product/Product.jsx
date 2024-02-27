import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';
import { FaHouseUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
const cx = classNames.bind(styles);

function Product() {
    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const decrease = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };
    const [count, setCount] = useState(0);

    const navigate = useNavigate();
    const returnHome = () => {
        navigate('/');
    };
    return (
        <div>
            <div className={cx('logo-return')}>
                <IoMdArrowBack className={cx('return')} onClick={returnHome} />
                <FaHouseUser className={cx('returnn')} />
            </div>

            <div className={cx('review-product')}>
                <div className={cx('img-product')}>
                    <img src="/img/Giày/adidas1.jpg" alt="" />
                    {/* <div className={cx('img2')}>
                        <img src="/img/Giày/nike2.jpg" alt="" />
                    </div> */}
                </div>
                <div className={cx('info-product')}>
                    <h1>[AD1122] ADIDAS SPEED RUN "BLACK"</h1>
                    <h2>222.222đ</h2>
                    <div className={cx('info-1')}>
                        <p>Loại: Giày</p>
                        <p>Trạng thái: Còn hàng</p>
                        <p>Chưa có mô tả cho sản phẩm này</p>
                    </div>
                    <div className={cx('size')}>
                        <h3>Size</h3>
                        <input type="checkbox" />
                        <p>37</p>
                        <input type="checkbox" />
                        <p>38</p>
                        <input type="checkbox" />
                        <p>39</p>
                        <input type="checkbox" />
                        <p>40</p>
                    </div>
                    <div className={cx('button-click')}>
                        <FaMinus onClick={decrease} />
                        <p>{count}</p>
                        <IoMdAdd onClick={increase} />
                    </div>
                    <div className={cx('status')}>
                        <button>Thêm vào giỏ hàng</button>

                        <button>Xem cửa hàng còn hàng</button>
                    </div>
                    <p>Mã sản phẩm: 201111063175 </p>
                    <p>Chia sẻ: </p>
                </div>
            </div>
        </div>
    );
}

export default Product;
