<template>
        <div class="
        mt-20 mb-10 ml-6 mr-6  rounded-2xl  px-80 pt-10 pb-10 duration-200 hover:bg-zinc-200/50">
        <v-md-editor mode="preview" :modelValue=data.blog.body></v-md-editor>
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
import { ref, computed,onMounted,reactive } from 'vue'
import useBlogStore from '@/stores/blog'
import { onBeforeRouteUpdate } from 'vue-router'
import {BlogInfo} from '@/stores/types/index'
const props = defineProps({
    id: {
        type: String,
        default: ''
    }
})

onBeforeRouteUpdate(() => {
  location.reload()
})

const data = reactive({
    blog:{
        id: 1,
        userId: 1,
        title: 'test',
        body: '',
    } as BlogInfo
});
const data2 = ref([]);
/* 使用useBlogStore来获取数据 */
onMounted(() => {
    const blogStore = useBlogStore();
    blogStore.getBlog().then((res:any) => {
        res.data.slice(0, 20).find((item:any) => {
            if(item.id == props.id){
                data.blog = item;
            }
        })
        console.log(data.blog);
    })
})
</script>

<route lang="yaml">
    path: '/blogList/:id'
</route>