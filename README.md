## 技术选型

* 构建工具 vite
```bash
# 看到有人说用vue-cli创建的项目版本永远都是 3.0，对此表示怀疑，于是动手实验，

# 发现这种说法不对，其创建的项目版本只是比官方版本低一些而已！

# 疑惑 -1

# 于是去vite官网查创建项目的最新命令，发现它拉取的vue版本也比官网的版本低！

# 疑惑 +1

# 是不是因为

npm create vite

# 少添加了@latest呢？但动手发现不指定版本号默认就是@latest！

# 于是重复测试的时候，写错了个命令:

npm create vue

# 误打误撞发现这个命令创建项目的vue vite版本都是官网最新的！

# 那这个命令又是哪里来的？？？疑惑再 +1

# 又去 vue 官网查命令，发现它创建项目的命令是：

npm init vue

# 创建的项目和 npm create vue 的效果完全一样！

# 原来 npm init 的别名就叫 npm create ！疑惑 -1

# 再对比两条命令创建项目的过程

npm create vite

npm create vue

# 发现 vite 主要提示选择具体框架（vue、react等），而 vue 则

# 是主要提示是否支持 typescript、vue-router等，所以可以理解

# 了，vite 要适配其他框架，所以通用型版本会低点，而 vue 是专

# 属脚手架，自然是最新的。

# 疑惑清零！

```
* 框架工具 react

  想给 './src' 配置路径别名 '@' 的时候，发现 vue 项目中的代码 :
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

// 方法学习
// new URL(str, base) 要求完整参数是数必须是注明scheme协议的，否则报错！！！
// 即必须是http://xx 或者file://xxx (scheme://) 在前面加个 '/' 都不行，
// 当只有一个参数时是 new URL('scheme://xxx'), 两个参数时，是以第二个参数为基准，协议写在第二个参数上！！！
// fileURLToPath(url|string) 要求转化的 URL 或 string 必须是file 协议且必须携带盘符号的， 否则报错！！！
```

       对 import.meta.url 不懂，以前是直接用 path 库解决的啊，

       于是研究这个写法，想在 main.jsx 中去打印，发现是能打印

       import.meta.url , 但是调用 'node:url' 模块报错，于是

       明白浏览器端是不能运行 node 后端api的，于是想着试试在

       vite.config.js 里面看看能不能打印，于是成功打印输出在

       node启动控制台！！！浏览器端不能写node端代码，记住了！