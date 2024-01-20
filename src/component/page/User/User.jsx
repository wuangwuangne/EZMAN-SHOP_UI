import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('login')}>
                <h3> đăng nhập</h3>
                <input type="text" placeholder="Email của bạn" />
                <input type="text" placeholder="Nhập mật khẩu" />
                <button>Đăng nhập</button>
            </div>
            <div className={cx('sign-up')}>
                <h3> đăng ký thành viên mới</h3>
                <input type="text" placeholder="Tên" />
                <input type="text" placeholder="họ" />
                <input type="text" placeholder="Email " />
                <input type="text" placeholder="Nhập " />
                <button>Đăng ký</button>
            </div>
        </div>
    );
}

export default User;
