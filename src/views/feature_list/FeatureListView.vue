<script setup lang="ts">


import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { NTag } from "naive-ui";
import ToolsDev from "./tools_dev.json";
import ToolsSystem from "./tools_system.json";

const router = useRouter();

const openTool = (e) => {
  if (e.type == "本地") {
    console.log("打开本地工具", e);
    router.push({name: "tools-local", params: {toolName: e.toolName}});
  } else {
    console.log("打开网络工具", e);
    router.push({name: 'tools-network', params: {toolName: e.href}});
  }
};

</script>
<template>
  <div class="flex flex-col select-none">
    <div class="flex m-2 text-xl font-bold border-b">## 开发辅助工具</div>
    <div class="m-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <div
          class="bg-white rounded-lg shadow-md p-1 border"
          v-for="(item , index) in ToolsDev"
          :key="index"
          @click="openTool(item)"
      >
        <div class="flex items-center gap-2">
          <div class="m-1 p-1 bg-amber-100 rounded-lg border">
            <Icon :icon="item.icon" class="text-2xl"/>
          </div>
          <div class="flex gap-2 items-center">
            <div>
              <n-tag type="info" size="small" :bordered="false" round>
                {{ item.type }}
              </n-tag>
            </div>
            <div class="font-medium overflow-hidden">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex m-2 text-xl font-bold border-b">## 系统辅助工具</div>
    <div class="m-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <div
          class="bg-white rounded-lg shadow-md p-1 border"
          v-for="(item , index) in ToolsSystem"
          :key="index"
          @click="openTool(item)"
      >
        <div class="flex items-center gap-2">
          <div class="m-1 p-1 bg-amber-100 rounded-lg border">
            <Icon :icon="item.icon" class="text-2xl"/>
          </div>
          <div class="flex gap-2 items-center">
            <div>
              <n-tag type="info" size="small" :bordered="false" round>
                {{ item.type }}
              </n-tag>
            </div>
            <div class="font-medium overflow-hidden">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>