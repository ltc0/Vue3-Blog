<template>
    <div className="mx-auto mt-16 flex max-w-3xl flex-col items-start justify-center">
      <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
        Tech Blog
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
          .
        </span>
      </h1>
      <p className="mb-4 font-inter text-slate-600 dark:text-slate-400">
        A blog about technology, programming and many other interesting things.
        There {{data.length > 1 ? 'are' : 'is'}} currently {{ data.length }}
        {{data.length > 1 ? 'posts' : 'post'}} on the blog.
      </p>

      <h3 className="mt-8 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[1.7rem] font-semibold motion-reduce:transition-none">
        All Posts
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
          .
        </span>
      </h3>
     
      <ol className="relative mt-8 border-l border-slate-200 dark:border-slate-700">
            <PostItem >  </PostItem>
      </ol>
    </div>
    <div class="fixed rounded-md right-40 bottom-20">
        <router-link to="/"
            class="inline-flex items-center justify-center 
            rounded-md border border-transparent
             bg-indigo-600 px-5 py-3 text-base font-medium 
             text-white ">Back Home</router-link>
    </div>
</template>

<script lang="ts" setup>
import {ref,reactive,onMounted} from 'vue'
import usePostStore  from "@/stores/post"
import { PostIndex } from "@/stores/types/PostIndex";
import axios from 'axios'
const data = ref([]);
const posts = usePostStore()
const folderPath = '@/../public/blog_store/数据结构.json'
onMounted(() => {
  axios.get(folderPath).then(
   async (res) => {
       data.value = await res.data; 
        console.log(data.value);
        console.log(data.value.length);
    }
)
})
</script>