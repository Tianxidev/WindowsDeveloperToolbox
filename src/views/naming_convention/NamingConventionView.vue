<script setup lang="ts">
import { ref, watch } from "vue";
import { NInput, NAlert, NButton } from "naive-ui";
import Clipboard from "@/utils/clipboard";
import { useToastTool } from "@/hooks/useToastTool";

interface ConvertItem {
  name: string;
  value: string;
}

const valueInput = ref<string>("");
const convertList = ref<ConvertItem[] | null>(null);

// 驼峰命名法
function toCamelCase(input: string, upperCase: boolean = false): string {
  const words = input.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s_]+/);
  const camelCase = words
    .map((word, index) => {
      if (index === 0) {
        return upperCase
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");

  return camelCase;
}

// 下划线命名法
function toSnakeCase(input: string, upperCase: boolean = false): string {
  const words = input.replace(/([a-z])([A-Z])/g, "$1_$2").split(/[\s_]+/);
  const snakeCase = words.join("_");
  return upperCase ? snakeCase.toUpperCase() : snakeCase.toLowerCase();
}

// 项目命名法
function toKebabCase(input: string, upperCase: boolean = false): string {
  const words = input.replace(/([a-z])([A-Z])/g, "$1-$2").split(/[\s_]+/);
  const kebabCase = words.join("-");
  return upperCase ? kebabCase.toUpperCase() : kebabCase.toLowerCase();
}

// 转换变量名
function convertVariableName(variableName: string) {
  let result = [] as ConvertItem[];

  if (!variableName) {
    return result;
  }

  variableName = variableName.replace(/\s/g, "");

  result.push({
    name: "小驼峰",
    value: toCamelCase(variableName, false),
  });

  result.push({
    name: "大驼峰",
    value: toCamelCase(variableName, true),
  });

  result.push({
    name: "大写下划线分隔",
    value: toSnakeCase(variableName, true),
  });

  result.push({
    name: "小写下划线分隔",
    value: toSnakeCase(variableName, false),
  });

  // 项目名称(全小写)
  result.push({
    name: "项目名称(全小写)",
    value: toKebabCase(variableName, false),
  });

  // 项目名称(全大写)
  result.push({
    name: "项目名称(全大写)",
    value: toKebabCase(variableName, true),
  });

  result.push({
    name: "前下划线小写分隔",
    value: "_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "前下划线大写分隔",
    value: "_" + toSnakeCase(variableName, true),
  });

  result.push({
    name: "单下划线内置变量",
    value: "_" + toSnakeCase(variableName, true) + "_",
  });

  result.push({
    name: "双下划线内置变量",
    value: "__" + toSnakeCase(variableName, true) + "__",
  });

  result.push({
    name: "全局变量(驼峰)",
    value: "g" + toCamelCase(variableName, true),
  });

  result.push({
    name: "全局变量(下划线)",
    value: "g_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "字符串变量(驼峰)",
    value: "s" + toCamelCase(variableName, true),
  });

  result.push({
    name: "字符串变量(下划线)",
    value: "s_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "数字变量(驼峰)",
    value: "n" + toCamelCase(variableName, true),
  });

  result.push({
    name: "数字变量(下划线)",
    value: "n_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "逻辑变量(驼峰)",
    value: "b" + toCamelCase(variableName, true),
  });

  result.push({
    name: "逻辑变量(下划线)",
    value: "b_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "数组变量(驼峰)",
    value: "a" + toCamelCase(variableName, true),
  });

  result.push({
    name: "数组变量(下划线)",
    value: "a_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "正则命名(驼峰)",
    value: "r" + toCamelCase(variableName, true),
  });

  result.push({
    name: "正则命名(下划线)",
    value: "r_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "函数命名(驼峰)",
    value: "f" + toCamelCase(variableName, true),
  });

  result.push({
    name: "函数命名(下划线)",
    value: "f_" + toSnakeCase(variableName, false),
  });

  result.push({
    name: "成员变量(驼峰)",
    value: "m" + toCamelCase(variableName, true),
  });

  result.push({
    name: "成员变量(下划线)",
    value: "m_" + toSnakeCase(variableName, false),
  });

  return result;
}

const copyValue = (value: string) => {
  Clipboard.copyToClip(value);
  console.log("复制成功");
  useToastTool().success("复制成功");
};

watch(valueInput, (newValue) => {
  convertList.value = convertVariableName(newValue);
});
</script>

<template>
  <div class="flex flex-col p-5 gap-5">
    <div class="flex flex-col gap-5">
      <n-alert title="命名法" type="info" :show-icon="false">
        我们希望所有的命名是有意义的。
      </n-alert>
      <n-input
        v-model:value="valueInput"
        type="text"
        placeholder="请输入变量名"
        clearable
      />
    </div>
    <div v-if="valueInput != ''" class="">
      <h1 class="text-2xl font-bold mb-2">生成结果</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div
          v-for="(item, index) in convertList"
          :key="index"
          class="bg-white rounded-lg shadow-md p-4 border"
        >
          <h2 class="text-xl font-semibold mb-2 border-b border-gray-300">
            {{ item.value }}
          </h2>
          <ul>
            <li class="flex justify-between">
              <span class="font-medium">{{ item.name }}</span>
              <span>
                <n-button
                  strong
                  secondary
                  size="tiny"
                  @click="copyValue(item.value)"
                  type="info"
                >
                  复制
                </n-button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
