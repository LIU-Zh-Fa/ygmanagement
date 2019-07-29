const proxy = require("http-proxy-middleware");
//跨域配置
module.exports = (app)=>{
    app.use(proxy("/api",{
        "target": "http://api.egu365.cn",
        "changeOrigin": true,
        "pathRewrite": {
            "^/api": ""
        }
    }));
    app.use(proxy("/mapi",{
        "target": "http://m.egu365.cn",
        "changeOrigin": true,
        "pathRewrite": {
            "^/mapi": ""
        }
    }));
    app.use(proxy("/wochu",{
        "target": "http://api9.wochu.cn",
        "changeOrigin": true,
        "pathRewrite": {
            "^/wochu": ""
        }
    }));
    app.use(proxy("/wwochu",{
        "target": "http://wmall.wochu.cn",
        "changeOrigin": true,
        "pathRewrite": {
            "^/wwochu": ""
        }
    }))
}
