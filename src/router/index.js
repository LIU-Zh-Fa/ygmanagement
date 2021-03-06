import {
    Login,
    Home,
    WcType,
    WcList,
    WcOrderList,
    WcOrderSta
} from "@pages";
export const layoutRouteComponent = [
    {
        path:"/home",
        meta:{},
        component:Home,
        name:"首页",
        key:"/home",
        icon:"icon-shouye"
    },{
        path:"/wc",
        meta:{},
        name:"我厨",
        key:"/wc",
        icon:"icon-shucai",
        children:[
            {
                path:"/wc/list",
                meta:{},
                component:WcList,
                name:"商品列表",
                key:"/wc/list",
                icon:"icon-list"
            },{
                path:"/wc/type",
                meta:{},
                name:"我厨类型",
                key:"/wc/type",
                icon:"icon-fenlei",
                component:WcType,
            },{
                path:"/wc/order",
                meta:{},
                name:"我厨订单",
                key:"/wc/order",
                icon:"icon-dingdan",
                children:[
                    {
                        path:"/wc/order/list",
                        meta:{},
                        name:"订单列表",
                        key:"/wc/order/list",
                        icon:"icon-dingdanliebiao",
                        component:WcOrderList,
                    },{
                        path:"/wc/order/sta",
                        meta:{},
                        name:"订单统计",
                        key:"/wc/order/sta",
                        icon:"icon-navicon-tjb",
                        component:WcOrderSta,
                    }
                ]
            }

        ]
    }
]

export const noLayoutRouteComponent = [
    {
        path:"/login",
        meta:{},
        component:Login,
        name:"登录",
        key:"/login"
    }
]