/*
 * @Author: dengxuyang
 * @Date: 2025-06-16 19:12:46
 * @LastEditors: 673303066@qq.com
 * @LastEditTime: 2025-06-16 19:17:50
 * @FilePath: /vue-map-test/src/main.js
 * @Description: 
 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueMapPlugin from 'vue-map-plugin'

const app = createApp(App)

app.use(VueMapPlugin, {
  amap: {
    key: '9e3bf3f7302a2e02c7b4f8999e75ee98',
    securityJsCode: '68e3b1cb01acd7cc950b8f4d20a0a8e6', // 如需安全密钥
    plugins: ['AMap.Geocoder'] // 需要加载的插件
  },
  bmap: {
    key: '你的百度Key'
  },
  google: {
    key: '你的Google Key'
  }
})

app.mount('#app')
