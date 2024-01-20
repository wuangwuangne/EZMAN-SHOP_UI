import classNames from 'classnames/bind';
import styles from './main.module.scss';

const cx = classNames.bind(styles);

const courses = [
    {
        imgage: 'img/adidas1.jpg',
        h2: 'Hello   ',
    },
];

const FormInput = () => {
    return <input type="checkbox" />;
};
const Course = (props) => {
    return (
        <div>
            <img src={props.imgage} />
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
    );
};

function Main() {
    return (
        <div>
            <div className={cx('sidebar')}>
                <h3>Thương hiệu</h3>
                <div>
                    <h3>Khoảng giá</h3>
                </div>
                <div>
                    <h3>Kích cỡ ( nike, adidas, jordan, vans,...) </h3>
                    <div className={cx('input')}>
                        <div>
                            37
                            <FormInput />
                            38
                            <FormInput />
                            39
                            <FormInput />
                        </div>
                        <div>
                            40
                            <FormInput />
                            41
                            <FormInput />
                            42
                            <FormInput />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('main')}>
                {courses.map((course) => (
                    <Course h2={course.h2} />
                ))}
            </div>
        </div>
    );
}

export default Main;
