<script setup lang="ts">
import { NButton, NSpace } from "naive-ui";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center mt-10">
      <div class="text-2xl">欢迎使用 Windwos 开发人员工具箱</div>
      <div class="text-sm">Welcome to the Windwos Developer's Toolbox</div>
      <div>
        <n-image
          width="100"
          src="@/assets/appreciate_code.jpg"
        />
      </div>
    </div>
    <div class="mt-5">
      <n-space>
        <n-button type="info" ghost>检查更新</n-button>
      </n-space>
    </div>
  </div>
</template>
