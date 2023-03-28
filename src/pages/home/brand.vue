<template>
        <Images></Images>
    <div class="brand-container">
        <div class="flex items-center justify-center z--5 fixed flex-col">
            <!-- 标题 -->
            <p class=" text-8xl font-serif font-extrabold">
                Welcome</p>
            <div class=" space-x-1 text-xl">
                taicilaren's blog
            </div>
        </div>
        <Waves></Waves> 
        <svg-icon class="absolute bottom-15 z-10 animate-bounce" icon-class="down" size="32px" ></svg-icon>
    </div>
</template>

<script setup lang="ts">
import Images from './image.vue'

</script>

<style lang="scss" scoped>
@import "@/assets/mixin.scss";
.brand-container {
    @include flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 10rem;
    color: var(--header-text-color);
}
</style>