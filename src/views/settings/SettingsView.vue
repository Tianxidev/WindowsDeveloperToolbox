<script setup lang="ts">

import { NInput } from "naive-ui";
import { ref, watch } from "vue";

const cmdInput = ref<string>('')

watch(cmdInput, (val) => {
  console.log(val)
  // 检查是否是开启调试
  if (val === 'debug') {
    // 打开开发者工具
    window.openDevTools()
  }
})

</script>

<template>
  <div class="flex p-3">
    <div class="flex-grow">
      <n-input v-model:value="cmdInput" placeholder="快捷指令" clearable />
    </div>
  </div>
</template>

<style scoped>

</style>