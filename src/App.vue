<script setup lang="ts">
import { NButton, NSpace } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();

</script>

<template>
  <div>
    <div class="flex p-2 bg-gray-200">
      <n-space>
        <n-button type="info" @click="router.push('/home')" ghost>首页</n-button>
      </n-space>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>
