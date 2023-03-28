<template>
  <header
    class="navbar bg-base-100 w-full  bg-current px-4 lg:h-[68px] fixed z-20 h-20">
    <div class="flex-none ">
      <a class="btn btn-ghost text-xl normal-case text-rose-50">taizilaoren's blog</a>
    </div>
    <!--     <div class="menu-item">
      <router-link to="/" class="menu-btn">
        <Icon icon="material-symbols:home-outline" width="22" class="inline-block items-center pb-0.5" />
        首页
      </router-link>
    </div>

    <div class="menu-item dropdown">
            <a class="menu-btn drop">
                文章
            </a>
            <ul class="submenu">
                <li class="subitem" >
                    <router-link class="link" to="/archive">
                        <svg-icon icon-class="archives"></svg-icon> 归档
                    </router-link>
                </li>
                <li class="subitem" >
                    <router-link class="link" to="/category">
                        <svg-icon icon-class="category"></svg-icon> 分类
                    </router-link>
                </li>
                <li class="subitem">
                    <router-link class="link" to="/tag">
                        <svg-icon icon-class="tag"></svg-icon> 标签
                    </router-link>
                </li>
            </ul>
        </div> -->

    <div class="relative inline-block font-medium text-xl space-x-2 p-4 items-center hover:animate-ping">
      <router-link to="/blog" class="flex items-center   text-rose-50">
        <Icon icon="material-symbols:home-outline" width="25" class="mr-2" />
        首页
      </router-link>
    </div>

    <div class="group text-rose-50 relative inline-block font-medium text-xl 
    space-x-2 p-4 items-center">
      <a class="flex items-center  bg-inherit">
        <Icon icon="pixelarticons:article-multiple" width="23" class="mr-2"/>
                文章
            </a>
      <ul class="hidden absolute left-1 w-max p-0 mt-2 text-sm  opacity-80 bg-red-200
     rounded-bl-xl group-hover:block "
       >
                <li class="flex hover:translate-x-2 m-2" >
                    <router-link class="flex items-center" to="/archive">
                      <Icon icon="material-symbols:edit-document" width="18" class="mr-1"/> 归档
                    </router-link>
                </li>
                <li class="flex hover:translate-x-2 m-2" >
                    <router-link class="flex items-center" to="/category">
                      <Icon icon="tabler:category" width="18" class="mr-1"/> 分类
                    </router-link>
                </li>
            </ul>
    </div>

    <div className="relative text-rose-50 inline-block font-medium text-xl space-x-2 p-4 hover:animate-ping
      ">
      <router-link to="/friend" class="flex items-center ">
        <Icon icon="fa-solid:user-friends" width="25" class="mr-2" /> 友链
      </router-link>
    </div>
    <div class="relative inline-block font-medium space-x-2 text-rose-50 text-xl p-4 hover:animate-ping">
      <router-link to="/about" class="flex items-center ">
        <Icon icon="mdi:about-variant" width="25" />
        关于
      </router-link>
    </div>

    <div class="flex-1 justify-end  space-x-5 mr-10">
      <slot>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
        <ColorModeSwitch />
      </slot>
      <div>
        <a href="https://github.com/ltc0?tab=repositories" class="text-s flex items-center justify-evenly text-rose-50">
          <span class="mr-1 font-bold ">github</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" class="">
            <path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { Icon } from '@iconify/vue';
import ColorModeSwitch from "./ColorModeSwitch.vue";
const counter = useCounterStore()

</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  height: 100%;
}

.menu-item {
  position: relative;
  display: inline-block;
  padding: 0 0.625rem;
  letter-spacing: 0.0625rem;
  font-size: 17px;
  text-align: center;

  &:not(.title) .menu-btn::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0.1875rem;
    bottom: 0;
    border-radius: 0.125rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: currentColor;
    transition: all 0.4s ease-in-out 0s;
  }

  &:hover .submenu {
    display: block;
  }
}

.menu-item.active:not(.dropdown) .menu-btn::before,
.menu-item:not(.dropdown):hover .menu-btn::before {
  width: 70%;
}

.submenu {

  position: absolute;
  left: 7px;
  width: max-content;
  margin-top: 0.5rem;
  padding: 0;
  background: var(--blue-9-a5);
  box-shadow: 0 0.3125rem 1.25rem -0.25rem var(--grey-9-a1);
  border-radius: 0.625rem 0;
  animation: slideUpIn 0.3s;

  &::before {
    position: absolute;
    top: -1.25rem;
    left: 0;
    width: 100%;
    height: 2.5rem;
    content: "";
  }
}

.subitem {
  display: block;
  font-size: 1rem;

  &:first-child {
    border-radius: 0.625rem 0 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.625rem 0;
  }

  .link {
    display: inline-block;
    padding: 0.3rem 0.7rem;
    width: 100%;
    text-shadow: none;
  }

  &:hover .link {
    transform: translateX(0.3rem);
  }
}




.drop::after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  border: 0.3rem solid transparent;
  border-top-color: currentColor;
  border-bottom: 0;
}

@media (max-width: 865px) {
  .menu {
    justify-content: center;
  }

  .menu .menu-item {
    display: none;
  }

  .menu .title {
    display: block;
  }
}
</style>