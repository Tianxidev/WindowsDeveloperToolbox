<script setup lang="ts">

import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const toolName = route.params.toolName;
onMounted(()=>{
  console.log("toolName=>", toolName);
});
</script>

<template>
  <div class="flex h-full">
    <iframe
        :src="toolName"
        class="w-full flex-1"
        frameborder="0"
    ></iframe>
  </div>
</template>

<style scoped>

</style>