
# vue-ssr-template
```
vue服务端渲染模板
```

## 技术栈
vue + vuex + vue-router + ES6/ES7 + webpack + sass + nodejs

## 项目运行
 1. node v8.1.2
 2. npm 5.0.3
 3. vue 2.4.4
 4. vuex 2.3.1
 5. vue-router 2.7.0
```
克隆，或者直接下载
git clone https://github.com/smalleast/vue-ssr-template.git

进入文件夹
cd vue-ssr-template

安装依赖
npm install
```

### 编译环境

## 本地运行

```bash
npm install
npm run dev
```

## 打包项目

``` bash
npm install
npm run build
npm start
```

## 删除已打包项目

``` bash
npm run del
```

## 项目部署
> 打包脚本 npm run build 后生成dist文件夹，将dist文件夹放在我们的生产服务器，
安装依赖后通过npm run pm2 来启动项目(node服务)

``` bash
npm install
npm run pm2
```

## 说明
```
>  如有问题或者遇到坑请直接在 Issues 中提，或者可以加我的QQ 382026180

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

```

## 项目布局
```
|-- build								                        // webpack的配置目录
|   |-- webpack.base.config.js							           // webpack编译文件的配置文件
|   |-- vue-loader.config.js							            // webpack的vue组件解析文件
|   |-- webpack.client.config.js							          // 开发客户端的编译文件 npm run dev
|   |-- webpack.server.config.js							          // 开发服务端的编译文件 npm run build
|-- src									                       // 静态源码目录
|   |-- components						                    // 组件
|       |-- services						                  // 所有跟服务器交互的js文件
|       |-- store						                    // vuex公共数据存储
|       |-- styles						                    // 全局公共样式
|       |-- vue						                    // 全局公共组件
|   |-- assets							                      // 公共静态文件、图片
|   |-- modules							                      //	所有的页面
|   |-- vendor								                    // 引用的公共插件
|-- .babelrc							                        // ES6语法编译配置
|-- .editorconfig						                      // 代码编写规格
|-- .gitignore							                      // git忽略的文件
|-- .npmrc							                          // npm配置管理及设置代理
|-- package.json						                      // 项目及工具的依赖配置文件
|-- package-lock.json					                    // 快捷下载依赖的配置文件
|-- README.md							                        // 说明
```


## 参考资源

[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)
