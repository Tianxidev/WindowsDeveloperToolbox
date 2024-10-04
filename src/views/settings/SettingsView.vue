<script setup lang="ts">
import { NInput } from "naive-ui";
import { ref, watch } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const cmdInput = ref<string>("");

watch(cmdInput, (value) => {
  console.log(value);
});

const quickInstructions = [
  {
    name: "debug",
    description: "开启调试",
    command: "view_open_devtools",
  },
];

const KeyboardEvent = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    const quickInstruction = quickInstructions.find(
      (item) => item.name === cmdInput.value
    );

    if (quickInstruction) {
      invoke(quickInstruction.command);
    }
    return;
  }
};
</script>

<template>
  <div class="flex p-3">
    <div class="flex-grow">
      <n-input
        v-model:value="cmdInput"
        placeholder="快捷指令"
        clearable
        @keydown="KeyboardEvent"
      />
    </div>
  </div>
</template>

<style scoped></style>
