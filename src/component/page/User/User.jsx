import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('login')}>
                <p>
                    <h3> đăng nhập</h3>
                </p>

                <p>
                    <input type="text" placeholder="Email của bạn" />
                </p>
                <p>
                    <input type="text" placeholder="Nhập mật khẩu" />
                </p>

                <p>
                    <button className={cx('hovers')}>Đăng nhập</button>
                </p>
                <p>
                    <a href="#"> Quên mật khẩu? </a>
                </p>
            </div>
            <div className={cx('sign-up')}>
                <p>
                    <h3> đăng ký thành viên mới</h3>
                </p>
                <p>
                    <input type="text" placeholder="Tên" />
                </p>
                <p>
                    <input type="text" placeholder="Họ" />
                </p>
                <p>
                    <input type="text" placeholder="Email " />
                </p>
                <p>
                    <input type="text" placeholder="Mật khẩu " />
                </p>
                <p>
                    <button>Đăng ký</button>
                </p>
            </div>
        </div>
    );
}

export default User;
