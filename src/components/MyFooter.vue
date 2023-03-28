<template>
  <footer class="footer  pt-10 text-base-content justify-evenly">
<!--     <div class=" justify-evenly text-stone-900">
  <span class="footer-title">链接</span>
  <a class="link-hover link font-black">首页</a>
  <a class="link-hover link font-black">博客</a>
  <a class="link-hover link font-black">分类</a>
  <a class="link-hover link font-black">关于</a>
</div> -->
<div class="ml-auto mr-auto">
  <button>

  </button>
</div>
<div class="ml-auto mr-auto justify-evenly">
  <span class="footer-title ">
    <div class="flex text-2xl ">
      <Icon icon="mdi:github" width="36" class=""/>
      <Icon icon="ri:wechat-line" width="36" />
      <Icon icon="ic:round-facebook" width="36" />
      <Icon icon="skill-icons:vuejs-dark" width="36" />
      <Icon icon="ph:file-doc" width="36" />
    </div>
  </span>
</div>
<div class="ml-auto mr-auto">
  <button>

  </button>
</div>


<!-- <div class="">
  <span class="footer-title flex">
    <Icon icon="mdi:github" width="20" />
    <Icon icon="mdi:github" width="20" />
  </span>
</div> -->
   
  </footer>
  <slot >
    <div class=" flex-col ml-auto  mr-auto  px-3  text-s">

<div>
  Theme by <a href="https://github.com/ltc0?tab=repositories">taizilaoren</a>
  <span>
    | Copyright © {{ 2022 }}-{{ new Date().getFullYear() }} Taicheng |
  </span>
  Made with Vue3,TailwindCSS
</div>
</div>
  </slot>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue';
computed(() => {

})
</script>

<style lang="scss" scoped>



</style>
