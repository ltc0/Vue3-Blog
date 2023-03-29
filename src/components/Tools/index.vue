<template>
    <div class="tool" >
        <div class="item back-to-top" @click="handleBackToTop">
           12
            <span class="count">{{ process }}%</span>
        </div>
    </div>
</template>

<script setup lang="ts">
//import { Icon } from '@iconify/vue';
import { useEventListener, useScroll } from "@vueuse/core";
import { reactive, ref } from "vue";
const process = ref(0);
const show = reactive({
    transform: "translateX(-45px)"
});
const { y } = useScroll(window);

useEventListener(document, "scroll", () => {
    process.value = Number(
        (
            (window.pageYOffset /
                (document.documentElement.scrollHeight - window.innerHeight)) *
            100
        ).toFixed(0)
    )
});

const handleBackToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style lang="scss" scoped>
.tool {
    position: fixed;
    right: 40px;
    bottom: 1rem;
    z-index: 9;
    color: black;
    box-shadow: 0 0 0.5rem rgb(0 0 0 / 10%);
    background: #fff;
    transition: all 0.5s;

        .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 1.9rem;
        padding: 0.3125rem 0 0;
        opacity: 0.6;
        cursor: pointer;
        transition: all 0.2s ease-in-out 0s;

        .count {
            font-size: 0.75em;
        }

        &:hover {
            opacity: 0.9;
        }
    }
}
</style>