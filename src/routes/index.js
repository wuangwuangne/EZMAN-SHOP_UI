import Home from '~/component/page/Home';
import Size from '~/component/page/Size';
import Main from '~/component/page/Main';

//Xem bth
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/size', component: Size },
    { path: '/main', component: Main },
];
// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
