<template>
  <div class="archive-title">文章总览 - {{ count }}
  </div>
  <div >
    <div v-for="(item, index) in data2" :key="index"
        class="w-1/3 mt-20 ml-auto mr-auto bg-white font-intertransform transition-transform duration-00 ease-in-out dark:bg-darkSecondary rounded-2xl p-2 flex flex-col sm:flex-row items-center mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg">
        <!-- 左侧图片 -->
        <div className="w-1/3">
           
             <router-link :to="`/article/${data2.id}`" href="">
              <img src="@/assets/blogImage/2.webp"
                class="my-auto items-center transition-all duration-400 backdrop-blur-xl rounded-xl object-cover w-full h-full" />
            </router-link>
        </div>

        <!-- 右侧内容 -->
        <div class="flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 lg:py-5 md:pr-5">
            <router-link :to="`/article/${data2.id}`" href="">
              <span
                class=" font-bold text-neutral-900 md:text-xl dark:text-neutral-200 hover:underline ">{{ item.title }}</span>
            </router-link>
            <p
                className="mt-3 text-sm sm:text-xs md:text-sm  text-gray-600 dark:text-[#b5b7ba] line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
                {{ item.body }}
            </p>


            <div className="flex items-center justify-between mt-auto">
                <div className="z-10 flex items-center gap-3 font-barlow">
                    <div className="w-[40px]">
                        <img src="@/assets/blogImage/avater.webp" className="rounded-full !m-0 h-full" />
                    </div>
                    <div className="flex flex-col">
                        <rounter-link to="/about" className="text-sm font-bold hover:underline text-gray-700 ">
                            taizilaoren
                        </rounter-link>
                        <span className="text-xs">{formatDate(updated_at)}</span>
                    </div>
                </div>
                <p
                    className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-dark-3 md:text-sm">
                    <span>{`${word_count} words`}</span>
                </p>
            </div>
        </div>
    </div>
  </div>
   


    <!-- #分页 -->
    <Pagination v-if="count > 0"  v-model:current="queryParams.current" :total="Math.ceil(count / 5)">
            </Pagination>
</template>
    
<script setup tang="ts">
import { Icon } from "@iconify/vue";
import { ref,computed,toRefs,onMounted,reactive } from 'vue'
import { formatDate } from "@/utils/date";
//import { PostIndex } from '../types/PostIndex'
import Pagination from '@/components/Pagination/Pagination.vue';
import useBlogStore from '@/stores/blog'
const store = useBlogStore()

const data2 = ref([]);
const data = reactive({
    count: 0,
    queryParams: {
        current: 1,
        size: 4,
    } 
});

const {
    count,
    queryParams,
    archivesList,
} = toRefs(data);
onMounted(() => {
      store.getBlog().then(( res) => {
        data2.value = res.data.slice(0, 20);
        count.value = data2.value.length;
        console.log(count.value);
    });
})

</script>
    
<style scoped>


</style>