import Home from '~/component/page/Home';
import Size from '~/component/page/Size';
import Foot from '~/component/page/Foot';
import Shoes from '~/component/page/Shoes';
import Others from '~/component/page/Others';
import User from '~/component/page/User';

//Xem bth
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/size', component: Size },
    { path: '/foots', component: Foot },
    { path: '/shoes', component: Shoes },
    { path: '/others', component: Others },
    { path: '/users', component: User },
];
// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
