import Wrap from '~/component/Layout/DefaultLayout/Wrap';

const data = [
    {
        id: 1,
        title: '[AD1122] DÂY GIÀY',
        price: '20.000',
        img: 'img/Phụ/dây.png',
    },
    {
        id: 2,
        title: '[AD1122] TẤT NIKE',
        price: '25.000',
        img: 'img/Phụ/tất1.png',
    },
    {
        id: 3,
        title: '[AD1122] TẤT ADIDAS',
        price: '1122',
        img: 'img/Phụ/tất2.png',
    },
    {
        id: 4,
        title: '[AD1122] XỊT GIÀY "ANTEKA"',
        price: '30.000',
        img: 'img/Phụ/xịtgiày.png',
    },
    {
        id: 5,
        title: '[AD1122] XỊT GIÀY "NHẬT BẢN"',
        price: '20.000',
        img: 'img/Phụ/xịtgiày2.png',
    },
    {
        id: 6,
        title: '[AD1122] adidas speed run "black"',
        price: '1122',
        img: 'img/Phụ/xịtgiày3.png',
    },
    {
        id: 7,
        title: '[AD1122] adidas speed run "black"',
        price: '1122',
        img: 'img/Phụ/dây.png',
    },
    {
        id: 8,
        title: '[AD1122] adidas speed run "black"',
        price: '1122',
        img: 'img/Phụ/tất1.png',
    },
    {
        id: 9,
        title: '[AD1122] adidas speed run "black"',
        price: '1122',
        img: 'img/Phụ/tất2.png',
    },
    {
        id: 10,
        title: '[AD1122] adidas speed run "black"',
        price: '1122',
        img: 'img/Phụ/xịtgiày.png',
    },
    {
        id: 11,
        title: '[AD1122] adidas speed run "black"',
        price: '1122',
        img: 'img/Phụ/xịtgiày2.png',
    },
    {
        id: 12,
        title: '[AD1122] adidas speed run "black"',
        price: '1122',
        img: 'img/Phụ/xịtgiày3.png',
    },
];
function Others() {
    return (
        <div>
            <Wrap data={data} />
        </div>
    );
}

export default Others;
