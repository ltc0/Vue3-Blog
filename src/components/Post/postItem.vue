<template>
 
      <li v-for="(item,index) in data" :key="item.id"
    className="mb-10 ml-6 -mt-30 rounded-2xl px-6 py-3 duration-200 hover:bg-zinc-200/50 motion-reduce:transition-none dark:hover:bg-white/10">
    <router-link :to="`/postList/${item.id}`" href="">
      
       <span className="absolute -left-3 flex  h-6 w-6 items-center justify-center rounded-full bg-blue-200 font-inter ring-8 ring-white dark:bg-blue-900 dark:ring-[#040d21]">
         <IconList className="h-3 w-3 text-blue-700 dark:text-blue-400" />
       </span>
       <header>
         <h3 className="mb-1 flex items-center font-inter text-lg font-semibold text-slate-900 dark:text-white">
          {{item.title}}
           <span v-if="index===0"
           className="mr-2 ml-3 hidden rounded bg-blue-200 py-0.5 pr-2.5 pl-1.5 text-sm font-medium dark:bg-white/10 sm:block">
               🔥 Latest
             </span>
         </h3>
         <time
           className="mb-2 block font-inter text-sm font-normal leading-none text-slate-500 dark:text-slate-500"
         >
            {{item.date}}
         </time>
       </header>
       <p className="mb-2 font-inter text-base font-normal text-slate-600 dark:text-slate-400">
        {{item.description}}
       </p>
       <p className="flex mt-6 font-inter items-center justify-center gap-1 text-md font-semibold  text-accent active:scale-95 active:border-black w-fit group">
         Read more
         <Icon icon="material-symbols:arrow-right-alt-rounded" 
         class="w-6 h-6 ml-1 transition group-hover:translate-x-2"/>
       </p>
      </router-link>
     </li>
         


    
</template>


<script lang="ts" setup>
import {ref,reactive,onMounted} from 'vue'
import usePostStore  from "@/stores/post"
import { PostIndex } from "@/stores/types/PostIndex";
import { Icon } from '@iconify/vue';
import axios from 'axios'
const data = ref([]);
const posts = usePostStore()
const folderPath = '@/../public/blog_store/数据结构.json'
onMounted(() => {
  axios.get(folderPath).then(
   async (res) => {
       data.value = await res.data; 
        console.log(data.value);
        console.log(data.value[0].title);
    }
)
})

</script>