import classNames from 'classnames/bind';
import styles from './User.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function User() {
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState({});
    const [dataRegister, setDataRegister] = useState({});

    const fetchLogin = (data) => {
        axios
            .post(`${process.env.REACT_APP_BASE_URL}auth/login`, data)
            .then((data) => {
                if (data.data.token) {
                    localStorage.setItem('token', data.data.token);
                    navigate('/');
                }
                console.log(data);
            })
            .catch((err) => {
                alert(err.response.data.error);
            });
    };

    const onSubmitLogin = () => {
        fetchLogin(dataLogin);
    };

    const onSubmitRegister = () => {
        axios
            .post(`${process.env.REACT_APP_BASE_URL}auth/register`, dataRegister)
            .then((data) => {
                const dataLog = {
                    email: dataRegister.email,
                    password: dataRegister.password,
                };
                if (dataRegister) {
                    fetchLogin(dataLog);
                }
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    const onChangeLogin = (e) => {
        const newData = { ...dataLogin };
        newData[e.target.name] = e.target.value;
        setDataLogin(newData);
    };

    const onChangeRegis = (e) => {
        const newData = { ...dataRegister };
        newData[e.target.name] = e.target.value;
        setDataRegister(newData);
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}auth/get-current`, {
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
            })
            .then((data) => {
                console.log(data.data.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <div className={cx('wrap')}>
            <div className={cx('login')}>
                <h3> đăng nhập</h3>

                <input
                    type="text"
                    placeholder="Email của bạn"
                    value={dataLogin.email || ''}
                    name="email"
                    onChange={onChangeLogin}
                />

                <input
                    type="text"
                    placeholder="Nhập mật khẩu"
                    value={dataLogin.password || ''}
                    name="password"
                    onChange={onChangeLogin}
                />

                <button onClick={onSubmitLogin} className={cx('hovers')}>
                    Đăng nhập
                </button>

                <a href="#"> Quên mật khẩu? </a>
            </div>
            <div className={cx('sign-up')}>
                <h3> đăng ký thành viên mới</h3>

                <input
                    type="text"
                    placeholder="Tên"
                    value={dataRegister.name || ''}
                    name="name"
                    onChange={onChangeRegis}
                />

                <input
                    type="text"
                    placeholder="Họ"
                    value={dataRegister.firstName || ''}
                    name="firstName"
                    onChange={onChangeRegis}
                />

                <input
                    type="text"
                    placeholder="Email"
                    value={dataRegister.email || ''}
                    name="email"
                    onChange={onChangeRegis}
                />

                <input
                    type="text"
                    placeholder="Mật khẩu "
                    value={dataRegister.password || ''}
                    name="password"
                    onChange={onChangeRegis}
                />

                <button onClick={onSubmitRegister}>Đăng ký</button>
            </div>
        </div>
    );
}

export default User;
