<template>
    <div className="flex flex-col min-h-screen ">
        <main className="container flex-grow max-w-screen-xl px-5 m-auto mt-16 sm:px-12 md:px-20">
            <v-md-editor mode="preview" :modelValue="mdContent"></v-md-editor>
        </main>
  
      </div>
</template>


<script lang="ts" setup>
import { ref, computed,onMounted,reactive } from 'vue'
import usePostStore  from "@/stores/post"
import { onBeforeRouteUpdate } from 'vue-router'
import {PostIndex} from '@/stores/types/PostIndex'
import axios from 'axios'
const posts = usePostStore()
const props = defineProps({
    id: {
        type: String,
        default: ''
    }
})
const data2 = ref([]);
const data = reactive({
    post:{
        id: '',
        section: '',
        date: '',
        title: 'test',
        description: '',
        url: '',
    } as PostIndex
});
const mdContent = ref('');
const folderPath = `../../public/blog_store/数据结构/${props.id}.md`;


onMounted(() => {
     axios.get(folderPath).then(async (res) => { 
    mdContent.value = await res.data;
    console.log(mdContent.value);
     });
})
</script>

<route lang="yaml">
    path: '/postList/:id'
</route>