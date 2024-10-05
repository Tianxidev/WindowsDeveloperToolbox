<script setup lang="ts">


import { onMounted } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import { NButton } from "naive-ui";

const openSystemDeviceManager = () => {
  invoke("view_open_system_device_manager");
};

onMounted(() => {
});

</script>

<template>
  <div class="flex h-full p-2">
    <div class="flex flex-col gap-2 w-full h-full">
        <div>
          <n-button type="tertiary" @click="openSystemDeviceManager">
            设备管理器
          </n-button>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>