import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider() {
    const slides = [
        { id: 1, src: '/img/slide1.jpg', alt: '1' },
        { id: 2, src: '/img/slide2.jpg', alt: '2' },
        { id: 3, src: '/img/slide3.jpg', alt: '3' },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className={cx('slider')} id="SLIDER">
            <div className={cx('slide-show')}>
                {slides.map((slide, i) => (
                    <div key={slide.id}>
                        {i === currentIndex && <img className={cx('image')} src={slide.src} alt={slide.alt} />}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Slider;
