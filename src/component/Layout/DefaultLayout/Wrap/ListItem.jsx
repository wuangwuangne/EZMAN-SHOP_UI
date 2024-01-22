import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListItem({ data }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('product')}>
                <Link className={cx('product-img')}>
                    <img src={data.img} alt="" />
                </Link>
                <div className={cx('procduct-content')}>
                    <h3>{data.title}</h3>
                    <p className={cx('price')}>{data.price}đ</p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
