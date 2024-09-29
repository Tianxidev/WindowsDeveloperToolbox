<script setup lang="ts">
import { ref } from "vue";

const inputJson = ref("");
const formattedJson = ref("");

const formatJson = () => {
  try {
    // 预处理：替换单引号和布尔值
    const sanitizedJson = inputJson.value
      .replace(/'/g, '"') // 替换单引号为双引号
      .replace(/True/g, "true") // 替换 True 为 true
      .replace(/False/g, "false"); // 替换 False 为 false

    // 尝试解析 JSON
    const parsed = JSON.parse(sanitizedJson);
    formattedJson.value = JSON.stringify(parsed, null, 2);
  } catch (error) {
    formattedJson.value = `无效的JSON字符串`;
  }
};
</script>
<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">JSON 格式化转换器</h1>
    <textarea
      v-model="inputJson"
      placeholder="请输入JSON字符串"
      class="w-full h-40 border border-gray-300 p-2 rounded mb-4"
    ></textarea>
    <button
      @click="formatJson"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      格式化
    </button>
    <h2 class="text-xl font-semibold mt-4">格式化结果</h2>
    <pre class="bg-gray-100 p-2 rounded border border-gray-300">
        {{ formattedJson }}
      </pre
    >
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>
