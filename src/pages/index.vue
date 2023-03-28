<template>
<div class="w-1/4 mt-20 ml-auto mr-auto">
  <el-card v-for="(item,index) in data" :key="index" class="mt-5" shadow="hover">
    <template #header>
      <div class="flex justify-between items-center">
        <span class=" text-2xl ">{{item.title}}</span>
        <div class="flex mt-0 mb-0 pb-0 items-center justify-center">
          <Icon icon="mdi:user-box-outline" width="16" class="mr-2 " />
                    <span class=" text-xs mr-4">taizilaoren</span>
                    <Icon icon="uiw:date" width="12" class="mr-2" />
                    <span class="text-xs mr-4">2023-3-27</span>
                    
        </div>
      </div>

    </template>
    <div v-for="(item,index) in data" :key="index" class="text item">{{ item.body}}</div>
  </el-card>
</div>




</template>

<script setup tang="ts">
import { Icon } from "@iconify/vue";
import { ref } from 'vue' 
//import { PostIndex } from '../types/PostIndex'
import useBlogStore from '@/stores/blog'
const store = useBlogStore()
const data = ref([]);
store.getBlog().then(res=>{
data.value = res.data.slice(0,10);
console.log(data.value)})


</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>