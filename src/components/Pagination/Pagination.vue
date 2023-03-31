<template>
    <n-pagination v-model:page="currentPage" :page-count="total" :page-slot="5" class=" justify-center p-10"/>
</template>


<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["update:current"]);
const props = defineProps({
    current: {
        type: Number,
        default: 1,
    },
    total: {
        type: Number,
        default: 0,
    }
});
const currentPage = computed<number | undefined>({
    get: () => props.current,
    set: value => {
        emit("update:current", value);
    }
});
</script>

<style scoped>

</style>