<script setup lang="ts">


import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { NTag } from "naive-ui";

const router = useRouter();

// 工具列表
const codeToolList = [
  {
    toolName: "naming_convention",
    title: "命名法",
    icon: "mdi:format-text-rotation-angle-up",
    type: "本地",
    href: "#",
  },
  {
    toolName: "json_formatter",
    title: "Json格式化",
    icon: "mdi:json",
    type: "本地",
    href: "#",
  },
  {
    toolName: "#",
    title: "Vue SFC Playground",
    icon: "file-icons:vue",
    type: "网络",
    href: "https://play.vuejs.org/",
  },
  {
    toolName: "#",
    title: "Tailwind Play",
    icon: "teenyicons:tailwind-solid",
    type: "网络",
    href: "https://play.tailwindcss.com/",
  },
  {
    toolName: "#",
    title: "IP出网检查",
    icon: "eos-icons:ip",
    type: "网络",
    href: "https://ip.skk.moe/simple",
  }, {
    toolName: "#",
    title: "IP溯源",
    icon: "mdi:ip-network-outline",
    type: "网络",
    href: "https://ip.sy",
  },{
    toolName: "#",
    title: "百度翻译",
    icon: "carbon:ibm-watson-language-translator",
    type: "网络",
    href: "https://fanyi.baidu.com",
  },
];

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
  <div class="flex flex-col">
    <div class="flex m-2 text-xl font-bold border-b">## 开发辅助工具</div>
    <div class="m-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <div
          class="bg-white rounded-lg shadow-md p-1 border"
          v-for="(item , index) in codeToolList"
          :key="index"
          @click="openTool(item)"
      >
        <div class="flex items-center gap-2">
          <div class="m-1 p-1 bg-amber-100 rounded-lg border">
            <Icon :icon="item.icon" class="text-2xl"/>
          </div>
          <div class="flex flex-col">
            <div class="font-medium overflow-hidden">{{ item.title }}</div>
            <div>
              <n-tag type="success" size="tiny" :bordered="false" round>
                {{ item.type }}
              </n-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex m-2 text-xl font-bold border-b">## 系统辅助工具</div>
    <div class="m-2 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2">
    </div>
  </div>
</template>
<style scoped></style>