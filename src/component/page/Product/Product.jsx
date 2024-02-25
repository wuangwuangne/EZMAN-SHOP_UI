import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';

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
    return (
        <div className={cx('main')}>
            <div className={cx('img-product')}>
                <img src="/img/Giày/nike2.jpg" alt="" />
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
                <p>Mã sản phẩm: </p>
                <p> Chia sẻ: </p>
            </div>
        </div>
    );
}

export default Product;
