<script setup lang="ts">
import { NImage } from "naive-ui";

import appreciateCode from "@/assets/appreciate_code.jpg";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center mt-10">
      <div class="text-2xl font-bold">欢迎使用 Windwos 开发人员工具箱</div>
      <div class="text-sm">Welcome to the Windwos Developer's Toolbox</div>
      <div>
        <n-image width="300" :src="appreciateCode" preview-disabled />
      </div>
    </div>
  </div>
</template>
