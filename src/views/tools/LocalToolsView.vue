<script setup lang="ts">

import JsonFormatter from "@/components/tools/json_formatter/JsonFormatter.vue";
import { useRoute } from "vue-router";
import NamingConvention from "@/components/tools/naming_convention/NamingConvention.vue";
import { onMounted } from "vue";

const route = useRoute();
const toolName = route.params.toolName;
onMounted(()=>{
  console.log("toolName=>", toolName);
});
</script>

<template>
  <div>
    <JsonFormatter v-if="toolName === 'json_formatter'"/>
    <NamingConvention v-else-if="toolName === 'naming_convention'"/>
    <div v-else>未识别到工具</div>
  </div>
</template>

<style scoped>

</style>