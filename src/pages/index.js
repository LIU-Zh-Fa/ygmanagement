import Loadable from 'react-loadable';
import Loading from '@common/loading';

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
})
const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});
const WcType = Loadable({
    loader: () => import('./wc/type'),
    loading: Loading,
});
const WcList = Loadable({
    loader: () => import('./wc/list'),
    loading: Loading,
});
const WcOrderList = Loadable({
    loader: () => import('./wc/order/orderlist'),
    loading: Loading,
})
const WcOrderSta = Loadable({
    loader: () => import('./wc/order/ordersta'),
    loading: Loading,
});
export {
    Login,
    Home,
    WcType,
    WcList,
    WcOrderList,
    WcOrderSta
}
