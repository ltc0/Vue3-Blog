<template>
    <MyHeader></MyHeader>
    <Brand></Brand>
    <!-- 内容容器 -->
    <div class="bg">
        <div class="main-container">
        <!-- 左容器 -->
        <div class="left-container">
            <ArticleItem></ArticleItem>
            <ArticleItem></ArticleItem>
            <ArticleItem></ArticleItem>
        </div>
        <div class="right-container">
     
        </div>
       
    </div>
    </div>

</template>

<script setup lang="ts">
import { reactive } from "vue"


</script>

<style lang="scss" scoped>
.bg {
    background-color: var(--grey-0);
}
.main-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: calc(100% - 0.625rem);
    margin: 0 auto;
    padding-bottom: 1.75rem;
    animation: slideUpIn 1s;
    margin-top: 1rem;
    padding-bottom: 1.75rem;
} 
.left-container {
    width: calc(100% - 18.75rem);
    transition: all 0.3s;
}

.right-container {
    position: sticky;
    top: 1rem;
    width: 18rem;
    margin-left: 0.8rem;
   
}

@media (min-width: 1200px) {
    .main-container {
        width: 72.5rem;
    }
}

@media (max-width: 991px) {
    .left-container {
        width: 100%;
    }

    .right-container {
        display: none;
        width: 100%;
    }
}

</style>

