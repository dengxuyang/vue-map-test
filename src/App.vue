<!--
 * @Author: dengxuyang
 * @Date: 2025-06-16 19:12:46
 * @LastEditors: 673303066@qq.com
 * @LastEditTime: 2025-06-16 19:31:05
 * @FilePath: /vue-map-test/src/App.vue
 * @Description: 
-->
<script setup>

</script>

<template>
  <div>
    <MapContainer
    :containerId="'my-map'"
    :mapType="'amap'" 
    :config="{
      center: [116.397428, 39.90923],
      zoom: 12
    }"
    @map-loaded="onMapLoaded"
    @map-error="onMapError"
    style="height: 100vh;"
  />
  </div>
</template>

<style scoped>

</style>
