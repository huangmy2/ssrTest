# ssr_demo
## 服务端渲染项目基础架构

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 项目相关引用说明
    ui框架引用element ui
    css预编译器less
    数据交互axios
    引用vuex
## 路由说明
    构建根目录下页面直接在page文件夹下新建即可
    构建携带参数页面 比如detail/3344
    需要新建detail文件夹，文件夹下新建_is.vue
## 结构说明
    components中写了部分头部，底部组件
    store vuex仓库
    assets静态文件
    plugins 插件引入
## 依赖插件引入说明
    · 如果引用支持nuxt插件，则可参考element的引入方法，需要在plugins文件夹下新建插件引入js文件（必须）
    · 如果引用不支持nuxt或者服务端渲染插件，需要在具体页面require引入，具体步骤wiki地址：http://wiki.dongqiudi.net/pages/viewpage.action?pageId=5309042
