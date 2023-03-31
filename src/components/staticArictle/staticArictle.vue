<template>
    <div class="
        mt-20 mb-10 ml-6 mr-6  rounded-2xl  px-80 pt-10 pb-10 duration-200 hover:bg-zinc-200/50">
        <v-md-editor mode="preview" :modelValue="mdContent"></v-md-editor>
    </div>
    <div class="inline-flex rounded-md shadow ml-20 px-80 mt-6">
        <router-link to="/"
            class="inline-flex items-center justify-center 
            rounded-md border border-transparent
             bg-indigo-600 px-5 py-3 text-base font-medium 
             text-white ">Back Home</router-link>
    </div>
</template>


<script lang="ts" setup>
import { ref, computed, toRefs, onMounted, reactive} from 'vue'
import useBlogStore from '@/stores/blog'
import axios from 'axios'
import {PostIndex} from "@/stores/types/PostIndex"
import { onBeforeRouteUpdate } from 'vue-router'

const mdContent = ref('');
const folderPath = '../../public/blog_store/数据结构/1.md';
axios.get(folderPath).then(async (res) => { 
    mdContent.value = await res.data; });


</script>