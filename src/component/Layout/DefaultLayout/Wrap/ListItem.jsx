import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListItem({ data }) {
    const navigate = useNavigate();
    const Click = () => {
        navigate(`/product/${data.id}`);
    };
    return (
        <div onClick={Click} className={cx('wrap')}>
            <div className={cx('product')}>
                <Link className={cx('product-img')}>
                    <img src={data.img} alt="" />
                </Link>
                <div className={cx('procduct-content')}>
                    <h3>{data.title}</h3>
                    <p className={cx('price')}>{data.price.toLocaleString()}đ</p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
