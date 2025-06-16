/*
 * @Author: dengxuyang
 * @Date: 2025-06-16 19:12:46
 * @LastEditors: 673303066@qq.com
 * @LastEditTime: 2025-06-16 20:01:41
 * @FilePath: /vue-map-test/src/main.js
 * @Description:
 */
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import VueMapPlugin from "vue-map-plugin";

const app = createApp(App);

app.use(VueMapPlugin, {
  amap: {
    key: import.meta.env.VITE_AMAP_KEY,
    securityJsCode: import.meta.env.VITE_AMAP_SECURITY, // 如需安全密钥
    plugins: ["AMap.Geocoder"], // 需要加载的插件
  },
  bmap: {
    key: "你的百度Key",
  },
  google: {
    key: "你的Google Key",
  },
});

app.mount("#app");
