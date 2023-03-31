<template>
  <staticArictle></staticArictle>

</template>
<script setup>

import { ref, computed, inject } from 'vue'
import usePostStore from "@/stores/post"
const data = usePostStore()
console.log(data.fetchMdFiles());
</script>


<route lang="yaml">
meta:
  layout: about
</route>