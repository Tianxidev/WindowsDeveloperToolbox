<script setup lang="ts">

import JsonFormatter from "@/components/tools/json_formatter/JsonFormatter.vue";
import { useRoute } from "vue-router";
import NamingConvention from "@/components/tools/naming_convention/NamingConvention.vue";
import { onMounted } from "vue";
import SystemComponents from "@/components/tools/system_components/SystemComponents.vue";

const route = useRoute();
const toolName = route.params.toolName;
onMounted(() => {
  console.log("toolName=>", toolName);
});
</script>

<template>
  <div class="flex w-full h-full">
    <div v-if="toolName === ''" class="flex-1">
      <div class="flex h-full justify-center items-center text-2xl">很抱歉, 打开工具组件异常, 工具名称不能为空</div>
    </div>
    <JsonFormatter class="flex-1" v-else-if="toolName === 'json_formatter'"/>
    <NamingConvention class="flex-1" v-else-if="toolName === 'naming_convention'"/>
    <SystemComponents class="flex-1" v-else-if="toolName === 'system_components'"/>
    <div v-else class="flex-1">
      <div class="flex h-full justify-center items-center text-2xl">很抱歉, 您访问了一个暂未支持或已下线的工具</div>
    </div>
  </div>
</template>

<style scoped>

</style>