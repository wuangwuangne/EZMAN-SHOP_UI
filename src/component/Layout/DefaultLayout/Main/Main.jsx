import classNames from 'classnames/bind';
import styles from './main.module.scss';

const cx = classNames.bind(styles);

const courses = [
    {
        image: 'img/adidas.jpg',
        h2: 'Hellod ',
        p: 'I love you',
    },
];

const FormInput = () => {
    return <input type="checkbox" />;
};
const Course = (props) => {
    return (
        <div>
            <h2>{props.h2}</h2>
            <img src={props.image} alt="" />
        </div>
    );
};

function Main() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('sidebar')}>
                <h3>Thương hiệu</h3>
                <FormInput />
                <FormInput />
                <FormInput />

                <div>
                    <h3>Khoảng giá</h3>
                </div>
                <div>
                    <h3>Kích cỡ ( nike, adidas, jordan, vans,...) </h3>
                    <div className={cx('input')}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={cx('main')}>
                <div className={cx('tool')}>
                    <label>Sắp xếp</label>
                    <select className={cx('option')} id="">
                        <option value="1">Mặc định</option>
                        <option value="1">Giá tăng dần</option>
                        <option value="1">Giá giảm dần</option>
                        <option value="1">Tên: A-Z</option>
                        <option value="1">Tên: Z-A</option>
                        <option value="1">Cũ nhất</option>
                        <option value="1">Mới nhất</option>
                    </select>
                </div>
                {courses.map((course) => (
                    <Course h2={course.h2} />
                ))}
            </div>
        </div>
    );
}

export default Main;
