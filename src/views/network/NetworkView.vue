<script setup lang="ts">
import { NTabs, NTabPane } from "naive-ui";
</script>

<template>
  <div class="flex flex-col flex-grow p-2">
    <n-tabs type="line" animated>
      <n-tab-pane name="myNetwork" tab="我的网络">
        <iframe
          src="https://ip.skk.moe/simple"
          class="w-full"
          frameborder="0"
        ></iframe>
      </n-tab-pane>
      <n-tab-pane name="ipsy" tab="IP溯源">
        <iframe
          src="https://ip.sy"
          class="w-full h-[calc(100vh-140px)]"
          frameborder="0"
        ></iframe>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
