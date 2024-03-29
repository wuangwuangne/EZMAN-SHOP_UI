import classNames from 'classnames/bind';
import styles from './Size.module.scss';

const cx = classNames.bind(styles);

function Size() {
    return (
        <div className={cx('size')}>
            <div className={cx('content')}>
                <h1>[BẬT MÍ] Cách chọn và đo size chuẩn</h1>
                <blockquote className={cx('blockquote')}>
                    <em>
                        Bạn đang muốn đặt một đôi giày ở Trung Quốc nhưng không biết chọn size như thế nào cho vừa? Thực
                        tế size giày Trung Quốc khác so với Việt Nam tuy nhiên không quá nhiều. Trong bài viết này chúng
                        ta sẽ cùng tìm hiểu về cách chọn size giày trung quốc chuẩn nhất nhé!
                    </em>
                </blockquote>
                <strong>1.Bảng quy đổi size giày Trung Quốc theo từng loại</strong>
                <p className={cx('center')}>Hãy so sánh kích thước chân của bạn với bảng size giày dưới đây:</p>
                <p className={cx('center')}>
                    <img src="/img/size-giay-nu.jpg" />{' '}
                </p>
                <p className={cx('center')}>Bảng size giày cho nữ</p>
                <p className={cx('center')}>
                    <img src="/img/bang-quy-doi-size-giay-nam.jpg" />{' '}
                </p>
                <p className={cx('center')}>Bảng size giày cho nam</p>
                <strong>2. Cách chọn và đo size giày phù hợp siêu đơn giản</strong>
                <p>Chỉ cần 1 tờ giấy trắng, 1 cây bút và 1 thước dây, sau đó thực hiện các bước sau:</p>
                <p>
                    <em className={cx('bold')}>Bước 1: Vẽ bàn chân</em>
                </p>
                <ul>
                    <li>Đặt bàn chân của bạn lên tờ giấy trắng.</li>
                    <li>Dùng bút chì vẽ lại khung bàn chân.</li>
                </ul>
                <p>Lưu ý: vẽ thẳng bút và ôm sát theo khuôn chân. Không xê dịch bàn chân khi vẽ.</p>
                <p>
                    <em className={cx('bold')}>Bước 2: Chọn điểm đo</em>
                </p>
                <p>Chọn điểm cao nhất của các ngón chân sau và điểm thấp nhất của gót chân.</p>
                <p>Kẻ các vạch như hình trên.</p>{' '}
                <p>
                    <em className={cx('bold')}>Bước 3: Lấy số đo</em>
                </p>
                <p>Dùng thước dây hoặc thước kẻ để đo đường vẽ ở bước 2.</p>
                <p>
                    <em className={cx('bold')}>Bước 4: So sánh bảng size giày</em>
                </p>
                <p>So sánh bảng kích thước để có size giày phù hợp.</p>
            </div>
        </div>
    );
}

export default Size;
