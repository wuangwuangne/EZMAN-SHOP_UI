import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartHistory() {
    const navigate = useNavigate();
    const continues = () => {
        navigate('/');
    };
    return (
        <div className={cx('main')}>
            <h1>Giỏ hàng</h1>
            <div className={cx('content')}>
                <img src="img/cart1.png" alt="" />
                <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                <button onClick={continues}>TIẾP TỤC MUA HÀNG</button>
            </div>
        </div>
    );
}

export default CartHistory;
