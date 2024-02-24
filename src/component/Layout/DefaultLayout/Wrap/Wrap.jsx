import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './wrap.module.scss';
import ListItem from './ListItem';

const cx = classNames.bind(styles);

const CustomSelect = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="custom-select">
            <select
                // className={`option ${selectedOption ? 'selected' : ''}`}
                className={cx('option')}
                value={selectedOption}
                onChange={handleChange}
            >
                <option value="">Mặc định</option>
                <option value="2">Giá tăng dần</option>
                <option value="3">Giá giảm dần</option>
                <option value="4">Tên: A-Z</option>
                <option value="5">Tên: Z-A</option>
                <option value="6">Cũ nhất</option>
                <option value="7">Mới nhất</option>
            </select>
        </div>
    );
};

const startValue = 35;
const endValue = 45;

const checkboxes = [];

for (let i = startValue; i <= endValue; i += 0.5) {
    checkboxes.push(
        <div key={i} style={{ display: 'inline-flex', width: '33.3333%' }}>
            <div>
                <input className={cx('input-size')} type="checkbox" value={i} />
                {i}
            </div>
        </div>,
    );
}

function Wrap({ data }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('slidebar')}>
                <div className={cx('list-sidebar')}>
                    <h3>Thương hiệu</h3>
                    <div>
                        <input className={cx('input-local')} type="checkbox" /> Adidas
                    </div>
                    <div>
                        <input className={cx('input-local')} type="checkbox" /> Nike
                    </div>
                    <div>
                        <input className={cx('input-local')} type="checkbox" /> Vans
                    </div>
                    <div>
                        <input className={cx('input-local')} type="checkbox" /> Jordan
                    </div>
                </div>
                <div className={cx('list-sidebar')}>
                    <h3>Khoảng giá</h3>
                    <div>
                        <input className={cx('input-price')} type="checkbox" /> Dưới 1.000.000đ
                    </div>
                    <div>
                        <input className={cx('input-price')} type="checkbox" /> 1.000.000đ - 2.000.000đ
                    </div>
                    <div>
                        {' '}
                        <input className={cx('input-price')} type="checkbox" /> 2.000.000đ - 3.000.000đ
                    </div>
                    <div>
                        <input className={cx('input-price')} type="checkbox" /> 3.000.000đ - 4.000.000đ
                    </div>
                </div>
                <div className={cx('list-sidebar')}>
                    <h3>Kích cỡ ( nike, adidas, jordan, vans,...) </h3>
                    <div className={cx('body-size')}>
                        <div className={cx('content')}>{checkboxes}</div>
                    </div>
                </div>
            </div>
            <div className={cx('main')}>
                <div className={cx('tool')}>
                    <label>Sắp xếp</label>
                    <CustomSelect />
                </div>
                <div style={{ display: 'flex', nflexWrap: 'wrap' }}>
                    {data.map((item) => (
                        <ListItem data={item} key={item.id} />
                    ))}
                </div>
                <div className={cx('next')}></div>
            </div>
        </div>
    );
}

export default Wrap;
